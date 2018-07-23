const express = require("express");
const bodyParser = require("body-parser");


// Sets up the Express app to handle data parsing
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


  
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgerController.js");

app.use(routes);
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



 