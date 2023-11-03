import mongoose from "mongoose";

const ConnectDB=async()=>{
  await mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log('db connected');
})}

export default ConnectDB ;