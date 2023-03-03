//const express = require('express') <-- icke module
import express from 'express';
import path from 'path';
import url from 'url';
import mustache from 'mustache-express';

/* configure working directory path */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Current working directory


/* Serer init parameter */
const app = express();
const addr = "127.0.0.1"; // <-- localhost
const port = 3000; // <-- any number between 3000 and 65535

/* configure template engine */
app.engine('html', mustache()); //initializes the templat engine
app.set('view engine', 'html'); // use files with .html
app.set('views', __dirname + '/views'); //sets the views folder to be used by render later on

/* Server database */
const db = { "todos": [] }; // init database with empty todos list

/* Set body to json coded */
app.use(express.urlencoded({ extended: true })) // for html forms (extended is true by default, allows for form to json)
app.use(express.json()); // transform request (data in) data to json

/* Resource routes */

app.get("/showTodos", (request, response) => {
  response.send(db.todos); //displays all todos in json format
});

app.post("/createTodo", (request, response) => {
  const todo = request.body; //request.body set by middleware urlencoded or json

  db.todos.push(todo); //add todo in database

  response.redirect("/home"); // Tell the user to perform a new GET request
});


app.get("/home", (request, response) => {
  const model = { todos: db.todos }
  response.render("home-page", model); // hämtar html filer från views mappen
});


/* Server startup */
app.listen(port, addr, () => { // http://localhost:3000
  console.log(`Server initialized on addr ${addr}`);
  console.log(`Port ${port} is used for server traffic`);
}); // There server awaits connections
