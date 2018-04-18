const express=require('express');
const path=require('path');
const session=require('express-session');
const passport=require('./mypassport');

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'something that should not be shared',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','hbs');


app.use('/products',require('./routes/products'));
app.use('/signin',require('./routes/signin'));
app.use('/signup',require('./routes/signup'));
app.use('/myaccount',require('./routes/myaccount'));
app.use('/logout',require('./routes/logout'));
app.use('/cart',require('./routes/cart'));

app.use('/',express.static(path.join(__dirname,'public')));


app.listen(4444,()=>{
    console.log("Server started at http://localhost:4444");
});