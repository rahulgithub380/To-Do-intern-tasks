import express,{Request,Response} from "express";
import { create_new_task,edit_task,delete_task,
read_all_delete_task,read_tasks,
read_all_in_progress_tasks,user_click_on_mark_done,
find_all_complete_tasks} from "../controllers/controlls";
const routes = express.Router();
routes.get('/',(req:Request,res:Response)=>{
    res.send("READ THE DATA SUCCESSFULLY");
})
// api of create a new task//
routes.post('/create-new-task',create_new_task)
// api of edit the tasks
routes.put('/edit-task/:_id',edit_task)
// api when user delete the task
routes.put('/delete-task/:_id',delete_task)
// api when user wants to read all of the deleted tasks 
routes.get('/read-delete-tasks/',read_all_delete_task)
// api for when user wants to read all task that is in the progress section
routes.get('/read-in-progress-tasks',read_all_in_progress_tasks)
// api for when user wants to compelete their task
routes.put('/complete-task/:_id',user_click_on_mark_done)
// api for when user wants to read all task that is in the complete section
routes.get('/read-complete-task/',find_all_complete_tasks)
// api when user wants to read that task is deleted , in-progress and compeleted tasks 
routes.get('/read-task/:_id',read_tasks);
export  {routes}