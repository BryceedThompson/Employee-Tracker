DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

--Department Table (primary)--
CREATE TABLE department (
    id INIT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

--Role Table--
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
  );

  --Employee Table--
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id (INT),
  manager_id(INT),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
  FOREIGN KEY (role_id) REFERENCES role(id)
  );

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;