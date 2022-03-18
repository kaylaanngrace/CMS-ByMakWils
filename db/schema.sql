/* drop tables if they exist */
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS jobRole;
DROP TABLE IF EXISTS employee;

/* use database */ 
USE CMS_db;

/* create table for department, role and employee */ 
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE jobRole (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 3) NOT NULL,
    department_id INTEGER NOT NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER NOT NULL,
    manager_id INTEGER
);