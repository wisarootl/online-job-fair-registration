const mongoose = require('mongoose');

const connectDB = async()=> {
    const conn= await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true     // fix "unique: true not enforced" bug
    });            
    console.log(`MongoDB Connected:${conn.connection.host}`);
}

module.exports=connectDB;