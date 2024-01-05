const express = require('express');
const router = express.Router();

const doneController = require('../Controllers/doneController');

router.get('/', doneController.getAllTodos);
router.post('/', doneController.createTodo);

module.exports = router;
