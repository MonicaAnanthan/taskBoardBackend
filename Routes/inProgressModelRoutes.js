const express = require('express');
const router = express.Router();

const inProgressController = require('../Controllers/inProgressController');

router.get('/', inProgressController.getAllTodos);
router.post('/', inProgressController.createTodo);

module.exports = router;
