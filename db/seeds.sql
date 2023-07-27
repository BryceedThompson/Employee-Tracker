USE employeeTracker_db;

INSERT INTO department (name)
VALUES  ("Sales"),
        ("Development"),
        ("Accounting"),
        ("Legal");

INSERT INTO role (title, department_id, salary)
VALUES  ("Sales Lead", 1, 100000),
        ("Salesperson", 1, 80000),
        ("Lead Developer", 2, 150000),
        ("Software Developer", 2, 120000),
        ("Account Manager", 3, 160000),
        ("Accountant", 3, 125000),
        ("Legal Team Lead", 4, 250000),
        ("Lawyer", 4, 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Tim", "Doe", 1, null),
        ("Mike", "Trout", 2, 1),
        ("Ashley", "Bean", 3, null),
        ("Kevin", "Loney", 4, 3),
        ("John", "Smith", 5, null),
        ("Malia", "Brown", 6, 5),
        ("Sarah", "Black", 7, null),
        ("Mike", "Baker", 8, 7);