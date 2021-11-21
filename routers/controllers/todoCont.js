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
  let idx = 0;
  try {
    const find = toDoList.find((item, id) => {
      idx = i;
      return item.id === Number(id);
    });

    if (find) {
      if (find.isDeleted) {
        res.status(404).json(toDoList);
      } else {
        toDoList[idx].isDeleted = true;
        res.status(200).json(toDoList);
      }
    } else res.status(400).json("thid task doesn't exist");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addToDo,
  getAllTasks,
  updateTask,
  deleteTask,
  completed,
};
