const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/NotePadDatabase',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Mongoose Connection Succesfull')).catch((err)=>console.log(err));


const Schemamodel = mongoose.Schema({
    name:String,
    id:String
});

const Schema = mongoose.model('notes',Schemamodel);

module.exports = Schema