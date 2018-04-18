const route=require('express').Router();
const {Cart}=require('../db/models');


route.get('/',(req,res)=>{

    if(!req.user){
        return res.redirect('/signin');
    }

    else{

        Cart.findAll({
            where: {userId: req.user.id}
        }).then(user=>res.send(user)).catch(err=>res.send(err));

    }

});


route.post('/',(req,res)=>{

        console.log(Number(req.body.quantity));
        console.log((req.user.id));
        console.log(Number(req.body.productId));

        Cart.upsert({qty:Number(req.body.quantity),
            userId:(req.user.id),
            productId:Number(req.body.productId)}).then(result=>{
                res.send(result);
        })
});

module.exports=route;