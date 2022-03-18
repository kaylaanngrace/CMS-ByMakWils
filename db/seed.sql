/* use database */
USE CMS_db;

/* data for deparment table */
INSERT INTO department (name)
VALUES ("Information Tech");
INSERT INTO department (name)
VALUES ("Graphic Design");
INSERT INTO department (name)
VALUES ("Web Programming");
INSERT INTO department (name)
VALUES ("Human Resources");

/* data for jobRole table */
INSERT INTO jobRole (title, salary, department_id)
VALUES ("IT Lead", 100000, 1);
INSERT INTO jobRole (title, salary, department_id)
VALUES ("FullStack Developer", 150000, 3);
INSERT INTO jobRole (title, salary, department_id)
VALUES ("Graphic Designer", 120000, 2);
INSERT INTO jobRole (title, salary, department_id)
VALUES ("Human Resources Lead", 125000, 4);
INSERT INTO jobRole (title, salary, department_id)
VALUES ("BackEnd Developer", 125000, 3);

/* data for employee table */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Megan", "Bettis", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leon", "Jones", 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sara", "Lee", 2, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Betty", "White", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Fredick", "Hooper", 1, 2);