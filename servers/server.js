const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

app.use(cors());

const todos = [
  {
    id: 1,
    text: "예시",
    done: false,
    createdDate: "2020-04-07",
    modifiedDate: "2020-04-07",
    ref: [1, 3]
  },
  {
    id: 2,
    text: "예시2",
    done: true,
    createdDate: "2020-05-07",
    modifiedDate: "2020-04-07",
    ref: []
  },
  {
    id: 3,
    text: "예시3",
    done: true,
    createdDate: "2020-05-07",
    modifiedDate: "2020-04-07",
    ref: [1, 2]
  }
];
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
    createdDate: "2020-05-07",
    modifiedDate: "2020-04-07",
    ref: []
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
