# 3e Mars

## Live-kod

[Live coding examples](live-coding/)

<details>
<summary>Setup npm with express</summary>
<br>

cd to desired working directory
1. create a file called server.js
2. npm init
3. npm install express && npm install --save-dev nodemon

In package.json modify
1. add "type": "module"
2. in "script" add another command
   1. "dev": "nodemon server.js"

You can now run the server with "npm run dev"

In server.js
```js
import express from 'express';

/* Serer init parameter */
const app = express();
const addr = "127.0.0.1";
const port = 3000;

/* Resource routes */
app.get("/", (request, response) => { // <-- http://127.0.0.1:3000/
  response.send("You successfully pinged the root resource");
});


/* Server startup */
app.listen(port, addr, () => { // http://localhost:3000
  console.log(`Server initialized on addr ${addr}`);
  console.log(`Port ${port} is used for server traffic`);
}); // There server awaits connections

```
<br>
</details>



## Material

