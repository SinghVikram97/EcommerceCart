$(document).ready(function () {


    let productTable=$('#product-table-body');
    let admin=$('#admin');



    function getProducts() {


        $.get('/products',(data)=>{
            console.log(data);
            productTable.empty();

            for(product of data){
                productTable.append('<tr>\n' +
                    '<td style="padding-left: 12%">\n' +
                    +product.id+'\n' +
                    '</td>\n' +
                    '<td style="padding-left:9.5%">\n' +
                    product.name+'\n' +
                    '</td>\n' +
                    '<td style="padding-left: 10%">\n' +
                    product.price+'\n' +
                    '</td>\n' +
                    '<td>\n' +
                    '<i class="fa fa-minus remove"></i>'+'\n' +
                    '</td>\n'+
                    '<td>\n' +
                    0+'\n' +
                    '</td>\n'+
                    '<td>\n' +
                    '<i class="fa fa-plus add"></i>'+'\n' +
                    '</td>\n'+
                    '</tr>')
            }

        })
    }

    // Called on refresh
    getProducts();

    $(document).on('click','.add',function () {

        let quantity=Number(($(this).parent().prev()).html());
        quantity=quantity+1;
        ($(this).parent().prev()).html((quantity));
        let productId=($(this).parent().prev().prev().prev().prev().prev().html());

        $.post('/cart',{

            quantity:quantity,
            productId:productId

        },(data)=>{

            console.log(data);

        })
    });
    $(document).on('click','.remove',function () {

        let quantity=Number(($(this).parent().next()).html());
        if(quantity>0){
            quantity=quantity-1;
            ($(this).parent().next()).html(quantity);
        }
        let productId=($(this).parent().prev().prev().prev().html());

        $.post('/cart',{

            quantity:quantity,
            productId:productId

        },(data)=>{

            console.log(data);

        })


    });


    function checkStatus() {
        $.get('/myaccount/status',(data)=>{
            if(data.status===true){

                // Logged in
                admin.after('<a href="/myaccount" class="mr-3">Myaccount</a>');
                admin.after('<a href="/logout" class="mr-3">Logout</a>')

            }
            else{

                // Logged out
                admin.after('<a href="/signin" class="mr-3 ">Signin</a>');
                admin.after('<a href="/signup" class="mr-3">Signup</a>');

            }
        })
    }

    checkStatus();


    function getCartFromServer() {

        $.get('/cart',(data)=>{

            for(product in data){

            }

        })


    }

    getCartFromServer();
});