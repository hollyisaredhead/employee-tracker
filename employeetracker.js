var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Zero617Strong",
  database: "employeetracker"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to view?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Updated Employee Manager",
        "exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          employeeViewAll();
          break;

        case "View All Employees By Department":
          employeeByDepartment();
          break;

        case "View All Employees By Manager":
          employeeByManager();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          employeeRole();
          break;

        case "Updated Employee Manager":
          rangeSearch();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}



function employeeViewAll() {
  inquirer
    .prompt({
      name: "first_name",
      type: "input",
      message: "View All?"
    })
    .then(function(answer) {
      console.log(answer.first_name);
      connection.query("SELECT * FROM employee WHERE ?", { song: answer.first_name }, function (err, res) {

        console.table(
          ['id', 'first_name', 'last_name', 'role_id', 'manager_id']
        );
        runSearch();
      });
    });
}

function employeeByDepartment() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "What department would you like to view employees from?"
    })
    .then(function (answer) {
      var query = "SELECT id, name FROM department WHERE ?";
      connection.query(query, { artist: answer.artist }, function (err, res) {
    

        for (var i = 0; i < res.length; i++) {
          console.table(
            ['id', 'first_name']
          );
          runSearch();
        };
      });
    })
}

function employeeByManager() {
  inquirer
    .prompt({
      name: "manager",
      type: "input",
      message: "What manager's employees would you like to view?"
    })
    .then(function (answer) {
      var query = "SELECT * FROM employee WHERE manager_id ?";
      connection.query(query, { artist: answer.artist }, function (err, res) {
    

        for (var i = 0; i < res.length; i++) {
          console.table(
            ['employee']
          );
          runSearch();
        };
      });
    })
}