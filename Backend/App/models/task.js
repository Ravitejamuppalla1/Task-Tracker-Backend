const mongoose = require('mongoose')

const {Schema} = mongoose

const taskSchema = new Schema({

    Title :{
        type:String,
        required:true
    },
    Description :{
        type:String,
        required:true
    },
    Team:{
        type:String,
        required:true
    },
    Assignees:{
        type:String,
        required:true
    },
    Priority:{
        type:String,
        required:true
    },
    Status :{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    EndDate:{
        type:String
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required:true
    }
})

const Task = mongoose.model('Task',taskSchema)
module.exports = Task