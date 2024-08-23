const  mysql = require("mysql");

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"employee"
});

connection.connect(function(error){
    if(error)throw error;
    console.log("Connected to database");})
    
module.exports=connection;