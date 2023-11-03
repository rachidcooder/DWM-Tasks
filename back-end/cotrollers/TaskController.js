import Task from '../modules/Task.js'



export const getTasks=async(req,res)=>{ 
 
   try{
    const tasks =await Task.find();
     res.status(200).json({tasks});
   }catch(err){
     console.log(err);
   }

}

export const AddTask=async(req,res)=>{

 const {tasktext,typetask}=req.body;

     if(!tasktext||!typetask)
          return   res.status(401).json({message :"Some field Empty !"}) ;
  try{
      const taskTopic =await Task.create({
        tasktext,typetask
      })

     res.status(200).json({taskTopic});

   }catch(err){
     console.log(err);
   }

}

 export const DeleteTask=async(req,res)=>{
  const id=req.params.id ;

    try{
    const taskdelete =await Task.findByIdAndRemove(id);
     res.status(200).json({taskdelete});
   }catch(err){
     console.log(err);
   }
}

 export const UpdateTask=async(req,res)=>{
  const id=req.params.id;
  let isdonone=true;
  const{tasktext,typetask,isdone}=req.body
    try{
      const tsk= await Task.findOne({_id:id});

       if(tsk) isdonone=!tsk.isdone;
    const taskUpdate =await Task.updateOne({_id:id},{tasktext,typetask,isdone:isdonone});
     res.status(200).json({taskUpdate});
   }catch(err){
     console.log(err);
   }
}
  