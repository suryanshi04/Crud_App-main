const UserDetails = require("../models/userModel")

exports.createTask = async(req,res,next)=>{
    try{
        const user = await UserDetails.create(req.body);
        
        res.status(200).json({
            status :"success",
            data:{
                user
            }
        })
    }catch(e){
        res.status(400).json({
           status:"Failed to create task"
        })
    }
}

exports.getAllTask = async(req,res,next)=>{
    try{
        const userList = await UserDetails.find();
        res.status(200).json({
            status :"success",
            count : userList.length,
            data:{
                userList
            }
        })
    }catch(e){
        res.status(400).json({
            status:"Failed to get all task"
        })
    }
}

exports.getOneTask = async(req,res,next)=>{
    try{
        const user = await UserDetails.findById(req.params.id);
        res.status(200).json({
            status :"success",
            data:{
                user
            }
        })
    }catch(e){
        res.status(400).json({
            status:"Failed to get task"
        });
    }
}

