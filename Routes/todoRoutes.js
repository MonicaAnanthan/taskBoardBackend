// const express = require('express');
// const router = express.Router();

// const todoController = require('../Controllers/todoController');

// router.get('/', todoController.getAllTodos);
// router.post('/', todoController.createTodo);

// module.exports = router;


const express = require('express');
const router = express.Router();
const Task = require('../Model/taskModel');

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

