import mongoose from "mongoose";

const server:string = "127.0.0.1:27017";
const dbName :string = 'internTasks';

const connections :any = mongoose.connect(`mongodb://${server}/${dbName}`)
                          .then(()=>{
                            console.log("database connect with server successfully");                            
                          })
                          .catch((Err)=>{
                            console.log(Err,"error will occured in the database");                           
                          })

export { connections}