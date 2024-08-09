const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () =>{
    try {
        await mongoose.connect(MONGODB_URI,{})
        console.log("exito")
    } catch (error) {
        console.error('error')
        process.exit(1)
    }
}

module.exports = connectDB