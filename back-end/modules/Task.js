import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
  tasktext :{type :String ,required :true},
  typetask :{type :String ,required :true , 
    enum: ['day', 'week', 'month'] },
  isdone :{type :Boolean ,required :true , default :false},
})

 

export default mongoose.model('Task',taskSchema);