CREATE DATABASE employeetracker;

USE employeetracker;

-- Create the table department.
CREATE TABLE department (
  id int NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Create a table for role.

CREATE TABLE role (
  id int NOT NULL,
  title varchar(30) NOT NULL,
  salary decimal,
  department_id int NOT NULL,
  PRIMARY KEY (id)
);

-- Create a table for employee.

CREATE TABLE employee (
  id int NOT NULL,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int,
  PRIMARY KEY (id)
);