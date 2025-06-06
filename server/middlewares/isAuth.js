
const jwt = require('jsonwebtoken')

const isAuth = async(req,res, next)=>{
    try {

        let {token} = req.cookies
        if(!token){
           return res.status(401).json({message:"Unauthorised access, please Login first"})
        }

        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!verifyToken){
           return res.status(401).json({message:"User doesn't have a valid token"})
        }

        req.userId = verifyToken.userId

        next()
        
    } catch (error) {
       return res.status(500).json({message:`isAuth error ${error}`})
    }
}

module.exports = isAuth