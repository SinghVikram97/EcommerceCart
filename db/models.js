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
        username:{

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

const Cart = db.define(
    'cart',
    {
        qty: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 0
        },
    userId: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
            model: User,
            key: 'id'
            },
            unique: 'user_product'
    },
    productId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        },
        unique: 'user_product'

    }
});

db.sync().then(()=>{
   console.log('Database is ready');
});

module.exports={
    Product,User,Cart
};