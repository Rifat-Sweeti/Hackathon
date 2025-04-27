const Task = require('../models/Task'); // Ensure the Task model is correct

// Create Task
exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;
    
    // Validate input
    if (!title || !description || !status) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
        const newTask = new Task({
            title,
            description,
            status
        });

        await newTask.save();
        res.status(201).json({ message: "Task created successfully", task: newTask });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        
        if (tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found" });
        }

        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, { title, description, status }, { new: true });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", task });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
