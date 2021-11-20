const toDoList = [
  { id: 0, task: "sleep", isCompleted: false, isDeleted: false },
  { id: 1, task: "eat", isCompleted: true, isDeleted: false },
  { id: 2, task: "sleep", isCompleted: false, isDeleted: false },
];

//adding tasks
const addToDo = (req, res) => {
  const { id, task, isComplete } = req.body;
  toDoList.push({ id: toDoList.length, task: req.body, isComplete: false });
  res.status(201).json({ id, task, isComplete });
};

//getting all tasks
const getAllTasks = (req, res) => {
  // toDoList.forEach((ele) => {
  //   if (ele.isComplete == false) {
  res.status(200).json(toDoList);
};

//update tasks name
const updateTask = (req, res) => {
  const { id } = req.params;
  const { editedTask } = req.body;

  toDoList.forEach((ele) => {
    if (ele.task === task) {
      ele.task = editedTask;
    }
  });
  res.status(200).json(editedTask);
  // console.log(toDoList);
};

//update task status to complete
const completed = (req, res) => {
  const { id } = req.params;

  toDoList.forEach((ele) => {
    if (ele.task === task) {
      toDoList.isComplete = !isComplete;
    }
  });
  res.status(200).json(toDoList);
};

//delete tasks
const deleteTask = (req, res) => {
  const { id } = req.params;
  console.log(res);
  console.log(id);
  toDoList.forEach((item, id) => {
    if (item.id == toDoList.id) {
      !toDoList.isDeleted;
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
