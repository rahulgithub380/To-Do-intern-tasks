import express,{Request,Response} from "express";
import * as dotenv from "dotenv";
import { routes } from "./Routes/app.route";
import { connections } from "./db/conn";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./swagger/swaggers.json"
import moment from "moment";
dotenv.config();
const Port= process.env.PORT;
const app = express();
app.get('/',(req:Request,res:Response)=>{
     res.json({
        message:"Welcome to the home page"
     })
})
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

app.use(express.json());
app.use(routes)
connections;
app.listen(Port, () => {
    console.log(`server will be listen on the port ${Port}`);
  })


