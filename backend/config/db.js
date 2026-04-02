import mysql from 'mysql2';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "ecommerce",
});

db.connect((err) =>{
    if(err) throw err;
    console.log("MySQL Connected.");
});

export default db;