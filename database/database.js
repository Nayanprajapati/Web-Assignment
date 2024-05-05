//write a function

// importing packages

//always export the function

// Importing the package
const mongoose= require('mongoose');

//  Creating a function

const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Database Connected Successfully")
    })
}

// Exporting the function
module.exports = connectDB;