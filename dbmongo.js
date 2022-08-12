const {MongoClient} = require('mongodb');
const mongoose =require('mongoose');
const url ='mongodb://localhost:27017/insertDB';

async function dbConnect(){
    

    mongoose.connect(
       url,

        (err) => {
         if(err) console.log(err) 
         else console.log("mongdb is connected");
        }
      );
    
}

module.exports= dbConnect;