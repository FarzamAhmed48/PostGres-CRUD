import express from "express"
import { dbConnection } from "./postgres/dbConnection.js"
import router from "./router/userRouter.js"

const app=express()
app.use(express.json())
app.use(router)
const PORT=8000

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})

dbConnection()