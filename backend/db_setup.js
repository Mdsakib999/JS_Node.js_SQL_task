const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

const sqlScript = fs.readFileSync('create_users.sql').toString();

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');


    connection.query(sqlScript, (err, result) => {
        if (err) throw err;
        console.log('Database setup completed successfully.');


        connection.query('CALL addUser(?, ?, ?, ?)', ['test@example.com', 'password123', 'user', 1], (err, result) => {
            if (err) throw err;
            console.log('New user added successfully.');
            connection.end();
        });
    });
});
