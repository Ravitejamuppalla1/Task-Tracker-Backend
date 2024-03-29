const express = require('express')
const route = express.Router()
const userAuthenticate = require('../middlewares/authenticate')
const userCtlr = require('../App/controllers/users_controller')
const taskCtlr = require('../App/controllers/tasks_controllers')

route.post('/api/register',userCtlr.register)
route.post('/api/login',userCtlr.login)

route.get('/api/tasklists',userAuthenticate,taskCtlr.listTasks)
route.post('/api/createtask',userAuthenticate, taskCtlr.createTask);
route.put('/api/Edittask/:taskId',userAuthenticate,taskCtlr.editTask)
route.delete('/api/deletetask/:taskId',userAuthenticate,taskCtlr.deleteTask)
route.post('/api/sortbypriority',userAuthenticate,taskCtlr.sortByPriority)
route.post('/api/sort',userAuthenticate,taskCtlr.sort)



module.exports = route