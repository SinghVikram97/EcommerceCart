const Sequelize=require('sequelize');

const db=new Sequelize(

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
            type:Sequelize.DataTypes.FLOAT,
            allowNull:false
        }

    }

);

const User=db.define(

    'user',{
        name:{

            type:Sequelize.DataTypes.STRING,
            allowNull:false,
            unique:true

        },
        password:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
        }
    }

);


db.sync().then(()=>{
   console.log('Database is ready');
});

module.exports={
    Product,User
};