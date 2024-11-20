import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";

const sequelize = new Sequelize('postgres', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});
let userModel=null
const dbConnection=async()=>{
    try {
        await sequelize.authenticate();
        userModel=await createUserModel(sequelize)
        console.log('Connection has been established successfully.');
        await sequelize.sync()
        console.log(`DataBase synced!`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export {
    dbConnection,
    userModel
}