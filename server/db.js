const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/Classroom";
const connectToMongo = () =>{
    mongoose.connect(mongoURI);
    console.log("Mongo connected successfully");
}
module.exports = connectToMongo;