const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const connectDb = require('./config/db')
const userRouter = require('./routes/userRouter.js')
const listingRouter = require('./routes/listingRoute.js')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true
}))
app.use(cookieParser())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/listing', listingRouter)

app.get('/',(req,res)=>{
    res.json("Hello World")
})

app.listen(port,()=>{
    connectDb()
    console.log(`Server is running on port ${port}`)
})