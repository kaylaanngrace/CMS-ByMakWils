
module.exports = function () {
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
            connection.query("INSERT INTO department (depName) VALUES (?)", [answer.depName] , function(err, res) {
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
            connection.query("INSERT INTO jobRole (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id], function(err, res) {
                if (err) throw err;
                console.table(res);
                initialPrompt();
            });
        });
    };
};

