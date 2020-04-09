const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
const todos = [];

// 오늘 날짜 반환
function getNowDate() {
  const date = new Date();
  var year = date.getFullYear();
  var month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  var day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return `${year}-${month}-${day}`;
}

// get todos
app.get("/api/todos", (req, res) => {
  res.send(todos);
});

// post
app.post("/api/todos", (req, res) => {
  const todo = {
    id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
    text: req.body.text,
    done: false,
    createdDate: getNowDate(),
    modifiedDate: getNowDate(),
    ref: req.body.ref
  };
  todos.push(todo);
  res.send(todos);
});

// put
app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find(c => c.id === parseInt(req.params.id));
  // 해당 ID 를 가진 todo가 없을 때, 404
  if (!todo) res.status(404).send(`ID was not found`);
  todo.text = req.body.text;
  todo.modifiedDate = getNowDate();
  todo.ref = req.body.ref;
  res.send(todos);
});

// put - done(toggle)
app.put("/api/todos/:id/done", (req, res) => {
  const todo = todos.find(c => c.id === parseInt(req.params.id));
  // 해당 ID 를 가진 todo가 없을 때, 404
  if (!todo) res.status(404).send(`ID was not found`);
  todo.done = !todo.done;
  // 완료 해제시, 자신을 참조 하고 있는 할 일도 완료 되어있을 때 해제
  if (!todo.done) {
    const refCheck = async () => {
      await todos.forEach(targetTodo => {
        if (targetTodo.ref.includes(todo.id)) {
          targetTodo.done = false;
        }
      });
    };

    refCheck();
  }
  res.send(todos);
});

// delete
app.delete("/api/todos/:id", (req, res) => {
  const todo = todos.find(c => c.id === parseInt(req.params.id));
  // 해당 ID 를 가진 todo가 없을 때, 404
  if (!todo) return res.status(404).send(`ID was not found`);
  const index = todos.indexOf(todo);
  // 삭제 전, 자신을 참조하고 있는 할 일에서도 참조 해제
  const refCheck = async () => {
    await todos.forEach(targetTodo => {
      if (targetTodo.ref.includes(todo.id)) {
        const idx = targetTodo.ref.indexOf(todo.id);
        targetTodo.ref.splice(idx, 1);
      }
    });
  };
  refCheck();
  // 삭제
  todos.splice(index, 1);
  res.send(todos);
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
