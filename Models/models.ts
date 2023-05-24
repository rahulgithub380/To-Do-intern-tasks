import moment from "moment";
import { Schema,model } from "mongoose";

const scheemas :any = new Schema({
    task_name :{
        type :String,
        required:true
    },
    date:{
        type:Number,
        default :moment().valueOf()
    },
    descriptions :{
        type: String,
        maxlength:5000,
        minlength:10,
        required:true,
    },
    status: {
        type:String,
        enum :['in-progress','complete','delete'],
        default : 'in-progress'
    }
})

const Models = model('task-detail',scheemas);
export {Models}