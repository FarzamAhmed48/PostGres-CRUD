import { DataTypes } from "sequelize";

export const createUserModel=async(sequlize)=>{
    const User = sequlize.define('User', {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            unqiue:true,
            allowNull:false,
            isLowerCase:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false

        }
    })
    return User
}
