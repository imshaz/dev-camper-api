const express =require('express')
const dotenv =require('dotenv')

const app = express()
//load env variables
dotenv.config({path:"./config/config.env"});
const PORT = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.status(200).json({success:true, data:{"some":"data"}})
})
app.listen(PORT, console.log(`server running on port ${PORT} and is in ${process.env.NODE_ENV}`))
