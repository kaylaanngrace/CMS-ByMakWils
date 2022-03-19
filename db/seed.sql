/* use database */
USE CMS_db;

/* data for deparment table */
INSERT INTO department 
    (depName)
VALUES 
    ("Information Tech"),
    ("Graphic Design"),
    ("Web Programming"),
    ("Human Resources");

/* data for jobRole table */
INSERT INTO jobRole 
    (title, salary, department_id)
VALUES 
    ("IT Lead", 100000, 1),
    ("FullStack Developer", 150000, 3),
    ("Graphic Designer", 120000, 2),
    ("Human Resources Lead", 125000, 4),
    ("BackEnd Developer", 125000, 3);


/* data for employee table */
INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jane", "Doe", 1, null),
    ("John", "Smith", 3, null),
    ("John", "Doe", 2, 1),
    ("Megan", "Bettis", 4, 3),
    ("Leon", "Jones", 5, 3),
    ("Sara", "Lee", 2, 5),
    ("Betty", "White", 2, 5),
    ("Fredick", "Hooper", 3, 2);