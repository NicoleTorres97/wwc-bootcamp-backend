require('dotenv').config()
//const express = require('express');

const cors = require('cors')

//Add mongoose
const mongoose = require('mongoose')

const postsRoutes  = require('./routes/posts.routes')


const app = express ()

//Middlwares
app.use(express.json())
app.use(cors());

app.use((error, req, res, next)=>{
    console.error(error.stack)
    res.status(500).json({message: error.message});
})
//Routes
app.use(postsRoutes)

const connectDb = () => {
    try{
        mongoose.connect(process.env.DB_URI);
        console.log("Database connected")

    } catch(error) {
        console.log(error);
    }
}

app.listen(process.env.PORT, () => {
    connectDb();
    console.log("Server is listening on port 8000"+ process.env.PORT)
})


module.exports = app;