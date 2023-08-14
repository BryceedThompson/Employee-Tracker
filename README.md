# Employee-Tracker

## Description
The goal of this project is to quickly and easily create interfaces that allow non-devs to easily view and interact with information stored in a database called content management systems or(CMS). This is a command-line app that manages a company's database using Node.js, Inquirer, and MySQL

## Install
Download the file from my github and install node!
* [Github Link](https://github.com/BryceedThompson/Employee-Tracker)
* download off of my GitHub!

## Usage
* Open your terminal in the index.js file.
* Then run the command 'npm i' 
* Open your terminal in the schema.sql file.
* Then run 'mysql -u root -p' and run 'source schema.sql' and source 'seeds.sql'
* Finaly go back to the index.js termainal and 'npm run start' and follow the prompt
```md
WHEN you start the application
THEN you are presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN you choose to view all departments
THEN you are presented with a formatted table showing department names and department ids
WHEN you choose to view all roles
THEN you are presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN you choose to view all employees
THEN you are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN you choose to add a department
THEN you are prompted to enter the name of the department and that department is added to the database
WHEN you choose to add a role
THEN you are prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN you choose to add an employee
THEN you are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN you choose to update an employee role
THEN you are prompted to select an employee to update and their new role and this information is updated in the database 

```

## Video Link
* [Watch video walk through here!](https://drive.google.com/file/d/1n1QU1JGfNj0Wyd5YGqtTMkov_IliRIYc/view)

## Contact
* [Github Link](https://github.com/BryceedThompson/Employee-Tracker)
* [Contact Me](mailto:bryceedthompson@gmail.com)

## Credit
* [MySQL documentation on installing and starting MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)

* [MySQL documentation on executing SQL statements from a text file](https://dev.mysql.com/doc/refman/8.0/en/mysql-batch-commands.html)
* [MySQL documentation on creating and selecting a database](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)
* [MySQL documentation on DROP DATABASE](https://dev.mysql.com/doc/refman/8.0/en/drop-database.html)
* [MySQL documentation on SELECT](https://dev.mysql.com/doc/refman/8.0/en/select.html)
* [MySQL documentation on INSERT](https://dev.mysql.com/doc/refman/8.0/en/insert.html)
* [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2#installation)
* [MySQL documentation on data types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)
* [MySQL Docs on Aggregate Functions](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html)
