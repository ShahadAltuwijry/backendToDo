

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

//update tasks name
const updateTask = (req, res) => {
  const { name } = req.params;
  const { editedTask } = req.body;

  toDoList.forEach((ele) => {
    if (ele.name === name) {
      ele.name = editedTask;
    }
  });
  res.status(200).json(editedTask);
  // console.log(toDoList);
};

//update task status to complete
const completed = (req, res) => {
  const { name } = req.params;

  toDoList.forEach((ele) => {
    if (ele.name === name) {
      name.isComplete = !isComplete;
    }
  });
  res.status(200).json(toDoList);
};

//delete tasks
const deleteTask = (req, res) => {
  const { name } = req.body;

  toDoList.forEach((item, i) => {
    if (item.name === name) {
      toDoList.splice(i, 1);
    }
  });
};

module.exports = {
  addToDo,
  getAllTasks,
  updateTask,
  deleteTask,
  completed,
};
