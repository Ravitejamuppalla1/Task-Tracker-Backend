const Task = require('../models/task')
const task = require('../models/task')

const taskCtlr = {}

taskCtlr.listTasks = async (req, res) => {

    const { id } = req.user.id
    try {
        const tasks = await task.find({ userId: req.user.id })
        res.json(tasks)

    }
    catch (e) {
        res.json(e)
    }
}

// CREATE

taskCtlr.createTask = async (req, res) => {
    try {
        const { body } = req
        const newtask = await task.create({ ...body, userId: req.user.id })
        res.json(newtask)
    }
    catch (e) {
        res.json(e)
    }
}

//update
taskCtlr.editTask = async (req, res) => {
    try {
        const { taskId } = req.params
        const { body } = req
        const newtask = await task.findByIdAndUpdate(taskId, body, { new: true, runValidators: true })
        res.json(newtask)
    }
    catch (e) {
        res.json(e)
    }
}

// DELETE

taskCtlr.deleteTask = async (req, res) => {
    try {
        const id = req.params.taskId;
        const task = await Task.findById(id);

        if (!task) {
            return res.json({ error: 'Task not found' });
        }

        if (task.Status === 'Completed') {
            return res.json({ error: 'Cannot delete a completed task' });
        }
        else if (task.Status !== 'Completed') {
            const data = await Task.findByIdAndDelete(id);
            if (data) {
                res.json(data);
            }
        }


    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
taskCtlr.sortByPriority = async (req, res) => {
    try {
        const { Priority, Assignees, startDate, EndDate } = req.body;

        let query = {};

        if (Priority) {
            query.Priority = Priority;
        }

        if (Assignees) {
            query.Assignees = { $regex: Assignees, $options: 'i' };
        }

        if (startDate && EndDate) {
           
            query.startDate = { $gte: startDate, $lte: EndDate };


        
        } else if (startDate) {
               
                query.startDate = startDate
            }
        const priorityData = await Task.find(query);
        res.json(priorityData);
    } catch (e) {
        res.json(e);
    }
};






const priorityMap = {
    "P0": 3,
    "P1": 2,
    "P2": 1
};

taskCtlr.sort = async (req, res) => {
    try {
        const { sortOrder } = req.body;
        let sortOptions = {};

        if (sortOrder === -1) {
            sortOptions = { priorityOrder: -1 }
        } else {
            sortOptions = { priorityOrder: 1 }
        }

        const priorityData = await Task.find().sort(sortOptions)

        priorityData.sort((taskA, taskB) => {
            const priorityValueA = priorityMap[taskA.Priority];
            const priorityValueB = priorityMap[taskB.Priority];
            return sortOrder === -1 ? priorityValueB - priorityValueA : priorityValueA - priorityValueB;
        });

        res.json(priorityData);
    } catch (e) {
        res.json(e);
    }
};




module.exports = taskCtlr