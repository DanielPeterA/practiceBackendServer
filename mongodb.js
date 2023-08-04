const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Mongoose Connection Succesfull')).catch((err)=>console.log(err));


const Schemamodel = mongoose.Schema({
    name:String,
    id:String
});

const Schema = mongoose.model('notes',Schemamodel);

module.exports = Schema