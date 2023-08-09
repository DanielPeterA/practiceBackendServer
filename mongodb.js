const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'})
const DB_URL = process.env.DB_URL

mongoose.connect(`${DB_URL}`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Mongoose Connection Succesfull')).catch((err)=>console.log(`Mongoose connection error DP`,err));


const Schemamodel = mongoose.Schema({
    name:String,
    id:String
});

const Schema = mongoose.model('notes',Schemamodel);

module.exports = Schema