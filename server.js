const inquirer = require('inquirer')
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  // MySQL username,
  user: 'root',
  // MySQL password
  password: 'password',
  database: 'cms_db'
});

// connect to database
db.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to the inventory_db database.`);

    initialPrompt();
});

  // Initial Prompts
  function initialPrompt() {
    inquirer
    .prompt({
        type: "list",
        choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View departments",
            "View roles",
            "View employees",
            "Update employee role",
            "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
    })
    .then(function(result) {
        console.log("You entered: " + result.option);

        switch (result.option) {
            case "Add department":
                addDepartment();
                break;
            case "Add role":
                addRole();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "View departments":
                viewDepartment();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Update employee role":
                updateEmployee();
                break;
            default:
                quit();

        };
    });
}; 

// add department prompt
function addDepartment() {
    inquirer
    .prompt({
        type: "input",
        message: "What is the name of the department?",
        name: "depName"
    })
    .then(function(answer){
        db.query("INSERT INTO department (depName) VALUES (?)", [answer.depName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            initialPrompt()
        });
    });
};

// add role prompt
function addRole() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What's the name of the role?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "salary"
        },
        {
            type: "input",
            message: "What is the department id number?",
            name: "department_id"
        }
    ])
    .then(function(answer) {
        db.query("INSERT INTO jobRole (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id], function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        });
    });
};

// add employee prompt
function addEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What's the first name of the employee?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What's the last name of the employee?",
            name: "last_name"
        },
        {
            type: "input",
            message: "What is the employee's role id number?",
            name: "role_id"
        },
        {
            type: "input",
            message: "What is the manager id number?",
            name: "manager_id"
        }
    ])
    .then(function(answer) {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        });
    });
};

// update employee prompt
function updateEmployee() {
    inquirer
    .prompt([
    {
        type: "input",
        message: "Which employee would you like to update?",
        name: "employeeUpdate"
    },

    {
        type: "input",
        message: "What do you want to update to?",
        name: "updateRole"
    }
    ])
    .then(function(answer) {

        db.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.employeeUpdate],function(err, res) {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        });
    });
};

// view department prompt
function viewDepartment() {
    // select from the database/table
    let query = "SELECT * FROM department";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
    });
};

// view roles prompt
function viewRoles() {
    // select from the database/table
    let query = "SELECT * FROM jobRole";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
    });
};

// view employees prompt
function viewEmployees() {
    // select from the databaset/table
    let query = "SELECT * FROM employee";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        initialPrompt();
    });
};
  
// quit prompts 
function quit() {
    db.end();
    process.exit();
}


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});



