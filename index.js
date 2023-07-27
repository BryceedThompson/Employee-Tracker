const inquirer = require("inquirer");
const connection = require('./assets/config/connections');
require('console.table');

const { introQuestions, employeeQuestions, roleQuestions, departmentQuestions } = require('./assets/lib/questions');

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`
    Connected to employeeTracker_db database!
    \n\n`)
    // Will initiate the project
    initiateQuestions();
});

const initiateQuestions = () => {
    inquirer.prompt(introQuestions)
        .then((answers) => {
            switch (answers.start_menu) {
                case "View All Employees":
                    viewEmployees()
                    break;
                case "Add Employee":
                    addNewEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "Add Role":
                    addNewRole();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "Add Department":
                    addNewDepartment();
                    break;
                case "Quit":
                    console.log("Thank you for using the employee tracker application! Goodbye!")
                    break;
            }
            if (answers.start_menu === "Quit") {
                return;
            }
        }
    );
};

const showEmployees = () => {
    const sqlQuery = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;'
    return connection.promise().query(sqlQuery)  
};

const viewEmployees = () => {
    showEmployees().then((result) => {
        console.table(result[0])
    }
    ).then(() => initiateQuestions())
};