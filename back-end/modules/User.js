import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const UserSchema=mongoose.Schema({
  username :{type :String ,required :true},
  email :{type :String ,required :true ,unique :true},
  password :{type :String ,required :true , min :6},
})

 UserSchema.methods.matchPassword =async function(Enterpassword){
  return await bcryptjs.compare(Enterpassword,this.password) ;
 }
 
  UserSchema.pre('save',async function(next){
    if(!this.isModified){
      return next();
    }

 const salt= await bcryptjs.genSalt(10);
  this.password=await bcryptjs.hashSync(this.password,salt);
  
  });

export default mongoose.model('User',UserSchema);