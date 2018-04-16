const express=require('express');

const app=express();

app.get('/',(req,res)=>{

    res.send('Hi');

});

app.listen(4444,()=>{
    console.log("Server started at http://localhost:4444");
});