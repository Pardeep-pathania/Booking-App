const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const connectDb = require('./config/db')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api/users', userRouter)

app.get('/',(req,res)=>{
    res.json("Hello World")
})

app.listen(port,()=>{
    connectDb()
    console.log(`Server is running on port ${port}`)
})