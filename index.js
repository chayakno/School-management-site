const express = require('express')
const app= express()
app.listen(5000,function() {console.log(`server runing on port 5000`)
})
app.get('/',function(req,res){
    res.send('hello');
})
