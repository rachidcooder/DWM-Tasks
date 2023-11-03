import express from "express"
import dotenv from 'dotenv'
import UserRoute from './Routers/UserRoute.js'
import TaskRoute from './Routers/TaskRoute.js'
import cors from 'cors'
import ConnectDB from "./configs/db.js"
dotenv.config();
const app =express();
const PORT=process.env.PORT||3001;

 app.use(express.json());
 app.use(cors());

  ConnectDB();

  app.use('/api/user',UserRoute);
  app.use('/api/task',TaskRoute);

app.listen(PORT,()=>{
  console.log("Listening to Port :",PORT);
})
