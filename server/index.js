const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

dotenv.config()
const cors = require('cors')
const authRouter = require('./routes/authRouter')
const connectDb = require('./config/db')
const userRouter = require('./routes/userRouter.js')
const listingRouter = require('./routes/listingRoute.js')
const bookingRouter = require('./routes/bookingRouter.js')


const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'https://bookly-booking-app.onrender.com', // your frontend URL
    credentials: true
}))
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/listing', listingRouter)
app.use('/api/booking', bookingRouter)



app.get('/',(req,res)=>{
    res.json("Hello World")
})

app.listen(port,()=>{
    connectDb()
    console.log(`Server is running on port ${port}`)
})
