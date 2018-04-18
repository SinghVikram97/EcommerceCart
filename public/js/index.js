$(document).ready(function () {


    let productTable=$('#product-table-body');



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

        let productId=($(this).parent().prev().prev().prev().prev().prev().html());
        // console.log(productId);
        $.post('/')

    });
    $(document).on('click','.remove',function () {

       let productId=($(this).parent().prev().prev().prev().html());
       // console.log(productId);

    });


});