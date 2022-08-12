const mongoose=require('mongoose');



const resultSchema= new mongoose.Schema({
    name: String,
    age:Number,
    mark1:Number,
    mark2:Number,
    mark3:Number,
    Grade:String
});
module.exports= mongoose.model('result',resultSchema);
