const route=require('express').Router();

route.get('/',(req,res)=>{

    req.logout();
    res.redirect('/');


});

module.exports=route;