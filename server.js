const express = require('express');
const app = express();
const Schema = require('./mongodb')
const cors = require('cors')
const PORT = process.env.PORT || 8000


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/',(req,res)=>{
    res.setHeader("Access-Control_Allow-Credentials","true")
    res.send('Express Running')
});
app.post('/createnotes',(req,res)=>{
    Schema.create({
        name:req.body.name,
        id:req.body.id
    }).then(()=>{console.log('data was sent');})
});
app.get('/userslist',async (req,res)=>{
   Schema.find({}).then((doc)=>{
        res.json(doc)   
    })
})
app.delete('/delete/:id',(req,res)=>{
    Schema.findByIdAndDelete({_id:req.params.id}).then((doc)=>console.log(doc)).catch((err)=>console.log(err))
})
app.put('/update/:id',(req,res)=>{
    Schema.findByIdAndUpdate({_id:req.params.id},{
        name:req.body.name,
        id:req.body.id
    }).then((doc)=>console.log(doc)).catch((err)=>console.log(err))

})

app.listen(PORT,()=>{
    console.log('hi express');
})