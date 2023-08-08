const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Mongoose Connection Succesfull')).catch((err)=>console.log(`Mongoose connection error DP`,err));


const Schemamodel = mongoose.Schema({
    name:String,
    id:String
});

const Schema = mongoose.model('notes',Schemamodel);

module.exports = Schema