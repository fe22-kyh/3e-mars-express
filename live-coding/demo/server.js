//const express = require('express') <-- icke module
import express from 'express';

/* Serer init parameter */
const app = express();
const addr = "127.0.0.1"; // <-- localhost
const port = 3000;

/* Server database */
const db = { "names": [] };

/* Resource routes */
app.get("/home", (request, response) => {
  console.log(request.query);
  response.send("Hey batman");
});

app.get("/profile", (request, response) => {
  db.names.push(request.query.name); // .../profile?name=<some_name>
  response.send("You entered the profile page of " + request.query.name);
});

app.get("/database", (request, response) => {
  response.send(db.names);
});



/* Server startup */
app.listen(port, addr, () => { // http://localhost:3000
  console.log(`Server initialized on addr ${addr}`);
  console.log(`Port ${port} is used for server traffic`);
}); // There server awaits connections
