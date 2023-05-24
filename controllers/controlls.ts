import { Models } from "../Models/models";
import { Request,Response } from "express";
import Joi from "joi";
import moment from "moment";
const joi = Joi
    .extend(require('@joi/date'));
const schemmass = Joi.object({
    task_name:Joi.string().required(),
    date: joi.date().format('DD-MM-YYYY').utc(),
    descriptions: Joi.string().trim().required(),
})
const create_new_task =async (req:Request,res:Response) => {
    try {
        let data= req.body
        let {error,value}= schemmass.validate(data)
        if(error){
            res.status(404).send(error.details[0].message);
            console.log(error.details[0].message);  
        }
         const create_task = await Models.create(value)
            res.send(create_task);
            console.log(create_task);
    } catch (error) {
        console.log(error,"error will be occured in the create_new_task");
        
    }
}
const edit_task = async(req:Request,res:Response)=>{
    try {
        const _id = req.params._id;
        const {task_name,date,descriptions}=req.body;
        const milliseconds = moment(date, 'DD-MM-YYYY').valueOf();
        const result = await Models.findByIdAndUpdate(_id,{
            task_name:task_name,
            date: milliseconds,
            description:descriptions
        } ,{new:true})
        res.send(result);
        console.log("task edit successfully");
    } catch (error) {
        console.log(error,"error will be occured while we edit a task");
    }
}
const delete_task = async(req:Request,res:Response)=>{
    try {

        const _id= req.params._id
        const result:any = await Models.findByIdAndUpdate(_id,{status:'delete'},{new:true});
        res.send(result);
        console.log("tasks delete sucessfully");
        
    } catch (error) {
        console.log(error,"error will be occured in the delete_task");        
    }
}
const read_all_delete_task= async(req:Request,res:Response)=>{
    try {
        const result:any = await Models.find({status:'delete'})
        res.send(result);
        console.log(result);
    } catch (error) {
        res.send(error)
        console.log(error,"error will be occured in the read_all_delete_tasks");
    }
}

const read_tasks = async(req:Request,res:Response)=>{
    try {
        const _id =req.params._id;
        const result :any = await Models.findById(_id);
        res.send(result);
        console.log(result);
          
    } catch (error) {
        res.send(error)
        console.log(error,"error will be occured in the read_particular_delete_tasks");
        
    }
}
const read_all_in_progress_tasks = async(req:Request,res:Response)=>{
    try {
        const result = await Models.find({status:'in-progress'});
        res.send(result);
        console.log(result);
        
    } catch (error) {
        res.send(error);
        console.log(error,"error will be occured in the read_all_in_progress_tasks");
        
    }
}
const user_click_on_mark_done= async (req:Request,res:Response)=>{
    try {
        const _id = req.params._id;
        const result = await Models.findByIdAndUpdate(_id,{status:"complete"},{new: true});
        res.send(result);
        console.log(result);
        
    } catch (error) {
        console.log(error,"error will be occured in the user_click_on_mark_done");
        
    }
}
const find_all_complete_tasks = async(req:Request,res:Response)=>{
    try {
        const result = await Models.find({status:'complete'});
        res.send(result);
        console.log(result);
        
    } catch (error) {
        console.log(error,"error will be occured it the find_all_complete_task");
        
    }
}

export {create_new_task,edit_task,delete_task,read_all_delete_task,read_tasks,read_all_in_progress_tasks,user_click_on_mark_done,find_all_complete_tasks}