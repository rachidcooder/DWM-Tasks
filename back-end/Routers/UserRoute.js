import User from "../modules/User.js";
import  express from "express";
import {SignIn,login} from '../cotrollers/userController.js'
const route =express.Router();
 
 route.post("/sign-in",SignIn);
 route.post("/login",login);

export default route;