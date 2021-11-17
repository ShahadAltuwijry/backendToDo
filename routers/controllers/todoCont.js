const { express } = require("express");

const toDoList = [
  { id: 0, task: "sleep", isComplete: false },
  { id: 1, task: "eat", isComplete: false },
  { id: 2, task: "sleep", isComplete: false },
];

//adding tasks
const addToDo = (req, res) => {
  const { id, name, isComplete } = req.body;
  toDoList.push({ id: toDoList.length, name: req.body, isComplete: false });
  res.status(201).json({ id, name, isComplete });
};

//getting all tasks
const getAllTasks = (req, res) => {
  res.status(200).json(toDoList);
};



module.exports = {
  addToDo,
  getAllTasks,
};
