import User from '../modules/User.js'
import jwt from 'jsonwebtoken'

const protect =async(req,res,next)=>{
  let token ;

 if(req.headers.authorization &&
   req.headers.authorization.startsWith('Bearer')){

    try{
   token = req.headers.authorization.split(" ")[1];
      //decodes token id
      const decoded = jwt.verify(token, process.env.SECR_TOKEN);
       
      req.user = await User.findById(decoded.id).select("-password");
      next();

    } catch (error) {
      res.status(401).json({message :"Not authorized, token failed"});
      //throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401).json({message :"Not authorized, no token"});
    //throw new Error("Not authorized, no token");
  }
};

export default protect ;