import jwt from "jsonwebtoken";

const generateToken=(id)=>{
 return  jwt.sign({id},process.env.SECR_TOKEN,{
  expiresIn:'30d'
 });
}

export default generateToken