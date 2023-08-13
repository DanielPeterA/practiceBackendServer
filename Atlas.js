const mongoose = require('mongoose')
require('dotenv').config({path:'./.env'})


const atlasUrl = process.env.atlas_URL

const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}


mongoose.connect(`${atlasUrl}`,connectionParams).then(()=>{
    console.log('Connected to atlas')
}).catch((err)=>{
    console.log('ERror',err);
})

const Schemamodel = mongoose.Schema({
    name:String,
    id:String
});

const Schema = mongoose.model('notes',Schemamodel);

module.exports = Schema