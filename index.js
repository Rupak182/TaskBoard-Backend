import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import taskRoute from './route/task.route.js'
import dotenv from 'dotenv'

const app= express();
app.use(express.json());

dotenv.config();
app.use(cors());
const port = 4001;

const URI =process.env.MONGO_URI
const PORT = process.env.PORT || 4000

try {
    await mongoose.connect(URI);
    console.log("connected to mongodb");
} catch (error) {
    console.log("Error :" +error);
}

app.use("/board",taskRoute)

// app.post("/",getTask);
// app.put("/",addOrupdateTask)


app.listen(PORT,()=>{
    console.log(`listening at port ${port}`);
})