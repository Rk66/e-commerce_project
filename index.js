const express= require('express');
const cors= require('cors');


require('./db/config');
const User = require('./db/User');
const mongoose = require('mongoose');
const Product = require('./db/product')

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{
    let user = new User(req.body);
    let result2 = await user.save();
    result2 = result2.toObject();
    delete result2.password
     resp.send(result2);
})

app.post("/login", async(req,resp)=>{
if (req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    if (user){
        resp.send(user)
    } else {
        resp.send({result: "No user found"})
    }
    
}else {
    resp.send({result: "No user found"})
}
})


app.post("/add-product", async(req, resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
})













// const connectDB = async ()=>{
//     mongoose.connect("mongodb://localhost:27017/studentDB")

//     const resultSchema = new mongoose.Schema({});
//     const result= mongoose.model("result", resultSchema)
//     const data = await result.find();
//     console.log(data)

// }
// connectDB();

app.listen(5000);

























//   ================>> UPdoad file using mongoDB=== >>>>>


// const express = require('express');
// const multer =require('multer');
// const app = express();

// const uplaod =multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,"uploads")
//         },
//         filename:function (req,file,cb)
//         {
//             cb(null,file.fieldname +"-" + Date.now() +".jpg")
//         }
//     })
// }).single("user_file");

// app.post("/upload",uplaod, async (req, resp)=>{
//      resp.send("file upload")
// });

// app.listen(5000);




// ====================================>>>>>>>>>>>>>>>>>..
// const express = require('express');
// const result = require('./result');
// require('./config');
// const result1 = require('./result');

// const app = express();
// app.use(express.json());

// API search (https://localhost:port_name/search/Ra)==========>

// app.get("/search/:key", async(req,resp)=>{
//     console.log(req.params.key)
//     let data = await result.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}},
//                 //{"age":{$regex:req.params.key}}
                
//             ]
//         }
//     )
//      resp.send(data)
// })


// API  create request and response data ========>>>>>

// app.post("/create",async (req,resp)=>{
//     const data = new result(req.body);
//     const result1 =await data.save();

//     //console.log(result1)
//     resp.send(result1);
// });
// app.get("/list", async (req,resp)=>{
//     const data = await result.find();
//     resp.send(data);
// })


//app.listen(8000);






















// DATABASE connection ===========================>>>>>>>>


//const dbConnect = require('./dbmongo')

//const insert = require('./insert')



// const main = async ()=>{
//     let data =await dbConnect();
    
//     console.warn(data);
//     await insert();
// }
// main();

