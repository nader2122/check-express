const express = require('express');
const path= require('path');
const logger = require('./logged/log');

const app =express();

const port =5000 ;


//static folder:
app.use(logger)

app.get('/',(req,res,next)=>{
    res.send('* if you visited in working hours put the complited link :<h2>http://localhost:5000/home.html</h2> ')
    next()

    })
app.use(express.static(path.join(__dirname,'public')));



app.listen(port,(err)=>{
    if(err)
    console.error(err)
    else
    console.log(`server is running with port ${port}`);
})