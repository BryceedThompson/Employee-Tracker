const inquirer = require('inquirer');

const introQuestions = [
    {
        type: 'list',
        message: 'What would you like to do',
        name: 'start_menu',
        choices: ['View All Employees','Add Employee', 'Update Employee Role','View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
];

const departmentQuestions =[
    {
        type: "input",
        message: "What is the name of the department?",
        name: "name"
    }
];

const roleQuestions = [
    {
        type: "input",
        message: "What is the name of the role?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary"
    },
];

const employeeQuestions = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name"
    }
];

module.exports = { introQuestions, departmentQuestions, roleQuestions, employeeQuestions };