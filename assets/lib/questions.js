const inquirer = require('inquirer');

// question for actions to take
const introQuestions = [
    {
        type: 'list',
        message: 'What would you like to do',
        name: 'start_menu',
        choices: ['View All Employees','Add Employee', 'Update Employee Role','View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
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
    },
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

const departmentQuestions =[
    {
        type: "input",
        message: "What is the name of the department?",
        name: "name"
    },
];

module.exports = { introQuestions, departmentQuestions, roleQuestions, employeeQuestions };