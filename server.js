const express=require('express');
const path=require('path');

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine','hbs');


app.use('/products',require('./routes/products'));
app.use('/signin',require('./routes/signin'));
app.use('/signup',require('./routes/signup'));

app.use('/',express.static(path.join(__dirname,'public')));


app.listen(4444,()=>{
    console.log("Server started at http://localhost:4444");
});