const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

app.use(cors());

function getNowDate() {
  const date = new Date();
  var year = date.getFullYear();
  var month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  var day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return `${year}-${month}-${day}`;
}

const todos = [];
app.use(bodyParser.json());

// get todos
app.get("/api/todos", (req, res) => {
  res.send(todos);
});
// get todo by id
app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find(c => c.id === parseInt(req.params.id));
  if (!todo) res.status(404).send(`ID was not found`);
  res.send(todo);
});

// post
app.post("/api/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    text: req.body.text,
    done: false,
    createdDate: getNowDate(),
    modifiedDate: "",
    ref: req.body.ref
  };
  todos.push(todo);
  res.send(todo);
});

// put
app.put("/api/todos/:id", (req, res) => {
  // Look up the todos
  const todo = todos.find(c => c.id === parseInt(req.params.id));
  // If not existing, return 404
  if (!todo) res.status(404).send(`ID was not found`);
  todo.text = req.body.text;
  todo.done = req.body.done;
  todo.modifiedDate = "";
  todo.ref = [];
  res.send(todo);
});

// delete
app.delete("/api/todos/:id", (req, res) => {
  // 1. Look up the todos
  const todo = todos.find(c => c.id === parseInt(req.params.id));
  // 2. Not existing, return 404
  if (!todo) return res.status(404).send(`ID was not found`);
  // 3. Delete
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  // 4. Return the same todo
  res.send(todo);
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
