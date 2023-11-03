import User from "../modules/User.js";
import  express from "express";
import {AddTask,UpdateTask,DeleteTask,getTasks} from '../cotrollers/TaskController.js'
import protect from "../tooles/Protect.js";
const route =express.Router();
 
 route.post("/add",protect,AddTask);
 route.post("/update/:id",protect,UpdateTask);
 route.delete("/delete/:id",protect,DeleteTask);
 route.get("/get",protect,getTasks);

export default route;