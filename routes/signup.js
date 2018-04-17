const route=require('express').Router();
const {User}=require('./db/models');

route.get('/',(req,res)=>{

    res.render('signup');

});

route.post('/',(req,res)=>{

    if(!req.body.username){
        res.send('Can\'t create account with empty username');
    }
    else if(!req.body.password){
        res.send('Can\'t create account with empty password');
    }

    User.create({
        username:req.body.username,
        password:req.body.password
    }).then((newUser)=>{
        res.redirect('/signin').catch((err)=>res.send(err.message))
    })

});

module.exports=route;