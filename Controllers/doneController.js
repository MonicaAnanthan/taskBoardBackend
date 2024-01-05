const Done = require('../Model/doneModel');

exports.getAllDoneTasks = async (req, res) => {
  try {
    const doneTasks = await Done.find();
    res.json(doneTasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDoneTask = async (req, res) => {
  const doneTask = new Done({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newDoneTask = await doneTask.save();
    res.status(201).json(newDoneTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};