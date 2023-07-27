const mysql = require("mysql2");

// Connect to database
const connection = mysql.createConnection (
    {
        host: "localhost",
        user: "root",
        password: "Jj$mith62",
        database: "employeeTracker_db"
    },
);

module.exports = connection;