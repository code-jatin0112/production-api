require('dotenv').config()
const mongoose = require('mongoose');
const app = require('./app')
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to MongoDB") )
.catch((err)=>console.log("Error connecting to MongoDB",err))

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})