import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    id:String,
    tasks:[
        {t_name:String,t_desc:String,t_icon:Number,t_status:Number}
    
    ],
    board:String
});

const Task = mongoose.model("Task",taskSchema);

export default Task;