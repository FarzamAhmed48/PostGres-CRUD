import { where } from "sequelize"
import { userModel } from "../postgres/dbConnection.js"

export const getUsers=async(req,res)=>{
    try {
        const users=await userModel.findAll()
        return res.send(users)
    } catch (error) {
        return res.status(500).json({
            message: `Error fetching users ${error.response.data.message}`,
        })
    }
}

export const addUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const userCheck=await userModel.findOne({where:{email}})
        if(!userCheck){
            const user=await userModel.create({name,email,password})
            return res.status(200).json({
                success:true,
                message:"User created Successfully",
                user
            })
        }
        return res.status(200).json({
            success:false,
            message:"User already exists",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error
        })
    }
}

export const updateUser=async(req,res)=>{
    console.log(req.params.id)
    console.log(req.body.name)
    try {
        const id=req.params.id
        const name=req.body

        const userCheck=await userModel.findOne({where:{id}})
        if(userCheck){
            const user=await userModel.update(name,{where:{id}})
            return res.status(200).json({
                success:true,
                message:"User updated Successfully",
            })
        }
        return res.status(404).json({
            success:false,
            message:"User not found",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}


export const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id
        const user=await userModel.findOne({where:{id}})
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found",
            })
        }
        await user.destroy()
        return res.status(200).json({
            success:true,
            message:"User deleted Successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}