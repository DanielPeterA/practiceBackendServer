const express = require('express')
const router = express.Router() 

router.get('/',(req,res)=>{
    res.send('Express Running')
})
router.post('createnotes',(req,res)=>{
    console.log(req.body);
    req.send('received')
})

module.exports = router;