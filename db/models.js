const Sequelize=require('sequelize');

const db=Sequelize(

    'ecartapp',
    'ecartappadmin',
    'ecartapppass',{
        host:'localhost',
        dialect:'mysql'
    }

);

const Product=db.define(

    'product',{

        name:{
            type:Sequelize.DataTypes.STRING,
            unique:true,
            allowNull:false
        },

        price:{
            type:Sequelize.DataTypes.FLOAT
            allowNull:false
        }

    }

);


db.sync().then(()=>{
   console.log('Database is ready');
});

module.exports=Product;