const { application } = require("express");

const toDoList = [
  { id: 0, task: "sleep", isComplete: false },
  { id: 1, task: "eat", isComplete: false },
  { id: 2, task: "sleep", isComplete: false },
];

// const addToDo = (req, res) => {
//     let newTask = {id: toDoList.length, name: }
// }

app.post("/addtask", (req, res) => {
    const {id, name, isComplete} = req.body;
    toDoList.push({id: toDoList.length, name: req.body, isComplete: false});
    res.status(201).json({id, name, isComplete});
});