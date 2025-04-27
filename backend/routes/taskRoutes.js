const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

// Create Task - POST /api/tasks
router.post('/', createTask);

// Get All Tasks - GET /api/tasks
router.get('/', getTasks);

// Update Task - PUT /api/tasks/:id
router.put('/:id', updateTask);

// Delete Task - DELETE /api/tasks/:id
router.delete('/:id', deleteTask);

module.exports = router;
