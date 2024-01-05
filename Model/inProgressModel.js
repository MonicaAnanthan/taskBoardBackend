
const mongoose = require('mongoose');

const inProgressSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
});

const InProgress = mongoose.model('InProgress', inProgressSchema);

module.exports = InProgress;
