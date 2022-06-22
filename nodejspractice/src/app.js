const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/firstconnection")
.then(()=>{
    console.log("database sucess")
}) .catch((err)=>{
    console.log(err);
});

//Schema
//A mongoose schema defines the structure of the document, default values, validators, etc.,
const rollnoSchema =new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    rollno : {
        type: Number,
        required: true
    },
    address: String,
    active : Boolean,
    date :{
        type:Date,
        default:Date.now
    }
})

// A mongoose model is a wrapper on the Mongoose schema.
// A mongoose schema defines the structure of the document , 
// default values, validators, etc., where as a mongoose model 
// provides an interface to the database for creating ,
// querying , updating , deleting records, etc.


// collection creation
const Rollno =new mongoose.model( "Rollno",rollnoSchema);
// create document or insert 

const chinmayRollno = new Rollno({
    name: "chinmay ingle",
    rollno : 18,
    address: "sarswati nagar",
    active : true,
})

chinmayRollno.save();