const express=require('express')
const app=express();

app.use((req,res,next)=>{
    console.log('in middleware');
    next();
})
app.use((req,res,next)=>{
    console.log('in the next middleware');
    res.send('<h3>Hi Shivanand!</h3>')
})

app.listen('3000')

