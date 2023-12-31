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
                    console.log("Have a great day!")
                    break;
            }
            if (answers.start_menu === "Quit") {
                return;
            }
        }
    );
};



// views and actions of emploees
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

const addEmployee = (newEmployee) =>{
    const sqlQuery = 'INSERT INTO employee SET ?'
    return connection.promise().query(sqlQuery, newEmployee)
};

const addNewEmployee = () =>{
    showRoles().then((result) => {
        const roleChoices = result[0].map((role) =>
        (
            {
                name: role.title,
                value: role.id
            }
        ));
        showEmployees().then((result) => {
            const managerChoices = result[0].map((employee) =>
            (
                {
                    name: `${employee.first_name} ${employee.last_name}`,
                    value: employee.id  
                }

            ));
            employeeQuestions.push({
                type: 'list',
                message: 'What is the role of the employee?',
                name: 'role_id',
                choices: roleChoices
            },
            {
                type: 'list',
                message: 'Who is their mangager?',
                name: 'manager_id',
                choices: managerChoices
            });
            inquirer.prompt(employeeQuestions).then((answers) => {
                addEmployee(answers).then((result) =>{
                    console.log(`${answers.first_name} was added to the list`);
                }).then(() => initiateQuestions());
            });
        });
    });
};

const updateEmployee = (employeeUpdate) => {
    const sqlQuery = `UPDATE employee SET role_id = ${employeeUpdate.updatedEmployeeRole} WHERE employee.id = ${employeeUpdate.updatedEmployee};`
    return connection.promise().query(sqlQuery)
};

const updateEmployeeRole = () => {
    showEmployees().then((result) =>{
        const updatedEmployeeChoices = result[0].map((employee) =>
        (
            {
                name: employee.first_name,
                value: employee.id
            }
        )
        );
        showRoles().then((result) =>{
            const updateRole = result[0].map((role) =>
            (
                {
                    name: role.title,
                    value: role.id
                }
            )
            );
            const updateRoleQuestion = [
                {
                    type: 'list',
                    message: 'Who do you want to update?',
                    name: 'updatedEmployee',
                    choices: updatedEmployeeChoices
                },
                {
                    type: 'list',
                    message: 'What role do you want them in?',
                    name: 'updatedEmployeeRole',
                    choices: updateRole
                }
            ];
            inquirer.prompt(updateRoleQuestion).then((answers) =>{
                updateEmployee(answers).then((result) =>{
                    console.log('Role updated');
                    initiateQuestions();
                });
            });
        });
    });
};



// views and actions of roles
const showRoles = () => {
    const sqlQuery = 'SELECT role.id, role.title, department.name As department, role.salary From role JOIN department ON role.department_id = department.id;'
    return connection.promise().query(sqlQuery)  
};

const viewRoles = () => {
    showRoles().then((result) => {
        console.table(result[0])
    }
    ).then(() => initiateQuestions())
};

const addRole = (newRole) =>{
    const sqlQuery = 'INSERT INTO role SET ?'
    return connection.promise().query(sqlQuery, newRole)
};

const addNewRole = () =>{
    showDepartments().then((result) => {
        const departmentChoices = result[0].map((department) =>
        (
            {
                name: department.name,
                value: department.id
            }
        )
        );
        roleQuestions.push({
            type: "list",
            message: "What department is this role in",
            name: "department_id",
            choices: departmentChoices
        })
        inquirer.prompt(roleQuestions).then((answers) => {
            addRole(answers).then((result) => {
                console.log(` ${answers.title} added to list.`)
            }).then(() => initiateQuestions())
        });
    });
};



// views and actions of deparments
const showDepartments = () => {
    const sqlQuery = `SELECT * FROM department;`
    return connection.promise().query(sqlQuery)
};

const viewDepartments = () => {
    showDepartments().then((result) => {
        console.table(result[0])
    }
    ).then(() => initiateQuestions())
};

const addDepartment = (newDepartment) =>{
    const sqlQuery = 'INSERT INTO department SET ?'
    return connection.promise().query(sqlQuery, newDepartment)
};

const addNewDepartment = () =>{
    inquirer.prompt(departmentQuestions).then((answers) => {
        addDepartment(answers).then((result) => {
            console.log(`${answers.name} added to the list`)
        }).then(() => initiateQuestions())
    });
};