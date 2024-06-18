import Task from "../model/tasks.model.js"



export const getTask = async (req, res) => {
    try {
        const { id } = req.body;

        let data = await Task.findOne({ id: id });

        if (data)
            res.status(200).json({ mesaage: "Data fetched from the database ", tasks: data.tasks, board: data.board });
        else
            res.status(400).json({ message: "Unable to fetch data" })

    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: "Internal server error" })

    }
}

export const addOrupdateTask = async (req, res) => {
    try {
        const { id, tasks, board } = req.body;
        let data = await Task.findOne({ id: id });

        if (data ) {
            data.tasks = tasks;
            data.board = board,
                await data.save();
            res.status(200).json({ message: "Data updated successfully", createdTask: data });

        }


        else {

            let createdTask = new Task({
                id: id,
                tasks: tasks,
                board: board
    
            });
            console.log(createdTask);
            await createdTask.save();
            res.status(201).json({ message: "Data added", createdTask });
            //res.status(400).json({ message: "Unable to update data" })

        }



    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: "Internal server error" })

    }

}

// not using in frontend
export const deleteTask = async (req, res) => {
    try {
        const { id, tasks } = req.body;

        let data = await Task.findOne({ id: id });

        if (data) {
            await Task.deleteOne({ id: id });
            res.status(200).json({ message: "Data deleted successfully" });
        }

        else {
            res.status(400).json({ message: "Unable to delete data" })

        }


    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({ message: "Internal server error" });
    }
}


