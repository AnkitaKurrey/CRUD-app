const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDb Connected`);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}
module.exports = connectDB;


// const mongoose = require("mongoose");
// // require('dotenv').config()

// const connectDB = () => {
//     mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

//     const db = mongoose.connection;
//     db.on("error", console.error.bind(console, "Connection error:"));
//     db.once("open", () => {
//         console.log("Database Connected");
//     });
// };

// module.exports = connectDB;


