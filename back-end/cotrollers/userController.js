import User from "../modules/User.js";
import generateToken from "../configs/generateToken.js";

export const SignIn =async(req,res)=>{
  const{username,email,password}=req.body;

   if(!username||!email||!password){
   return res.status(401).json({message :"Some field Empty !"}) ;
   }

  try{
 let user =await User.findOne({email});
  if(!user){
    user=new User({username,email,password});
      await  user.save();

      res.status(200).json({
        "_id":user._id,
        "username":user.user,
        "email":user.email,
        token:generateToken(user._id)}) ;
  }else
   res.json({message:"User already existe !"});

   }catch(err){
    console.log(err);
   }

}


export const login=async(req,res)=>{
  const{email,password}=req.body;

   if(!email||!password){
   return res.status(401).json({message :"Some field Empty !"}) ;
   }

  try{
 let user =await User.findOne({email});
  if(!user){
    return res.status(200).json({message:"Email or password Invalide!"});
  }else {
         const isMatchPassword=await user.matchPassword(password);
     if(!isMatchPassword){
       return res.status(200).json({message:"Email or password Invalide!"});
     }
      res.status(200).json({
        "_id":user._id,
        "username":user.username,
        "email":user.email,
        token:generateToken(user._id)}) ;
  }
   

   }catch(err){
    console.log(err);
   }

}
