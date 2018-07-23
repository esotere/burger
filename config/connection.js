const mysql = require("mysql");

//create the connection information for the sql database
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "2823",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readBurgers();
  });
  
  function readBurgers() {
    connection.query("SELECT burger_name FROM burgers", function(err, res) {
      if (err) throw err;
  
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }

  module.exports = connection;