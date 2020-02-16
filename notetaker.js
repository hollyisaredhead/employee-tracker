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
  console.table([
    {
      name: 'foo',
      age: 10
    }, {
      name: 'bar',
      age: 20
    }
  ]);
}