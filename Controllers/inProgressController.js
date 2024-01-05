const InProgress = require('../Model/inProgressModel');

exports.getAllInProgressTasks = async (req, res) => {
  try {
    const inProgressTasks = await InProgress.find();
    res.json(inProgressTasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createInProgressTask = async (req, res) => {
  const inProgressTask = new InProgress({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newInProgressTask = await inProgressTask.save();
    res.status(201).json(newInProgressTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};