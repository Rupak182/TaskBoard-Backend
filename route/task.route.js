import express from 'express'
import {addOrupdateTask,deleteTask,getTask} from '../controller/task.controller.js'

const router =express.Router();

router.post("/view",getTask);

router.put("/update",addOrupdateTask);

router.delete("/delete",deleteTask);


export default router;