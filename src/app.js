const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];
let currentId = 1;

const validStatuses = ["pendiente", "en progreso", "completado"];

app.get("/", (req, res) => {
  res.send("Task Manager DevOps + V&V funcionando");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, status } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "El título es obligatorio" });
  }

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: "Estado inválido" });
  }

  const task = {
    id: currentId++,
    title,
    status,
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, status } = req.body;

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "El título es obligatorio" });
  }

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: "Estado inválido" });
  }

  task.title = title;
  task.status = status;

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Tarea eliminada correctamente" });
});

app.resetTasks = () => {
  tasks = [];
  currentId = 1;
};

module.exports = app;