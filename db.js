const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Mohamad:M123456789@cluster0.cigo0oi.mongodb.net/AltoriCars-Rental',{useUnifiedTopology:true,useNewUrlParser:true})

    const connection = mongoose.connection

    connection.on('connected' , () => {
        console.log('Mongo DB Connection Successful')
    })

    connection.on('error' , () => {
        console.log('Mongo DB Connection Error')
    })
    
}
 connectDB();
 module.exports = mongoose