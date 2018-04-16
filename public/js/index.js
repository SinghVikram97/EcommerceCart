$(document).ready(function () {

    let submitBtn=$('#product-submit');

    let productNameInput=$('#product-name');
    let productPriceInput=$('#product-price');
    let productName;
    let productPrice;

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
                    '</tr>')
            }

        })
    }

    // Called on refresh
    getProducts();

    submitBtn.click(function (e) {

        e.preventDefault();

        productName=productNameInput.val();
        productNameInput.val('');

        productPrice=productPriceInput.val();
        productPriceInput.val('');



        $.post('/products',
            {

                name: productName,
                price: productPrice
            },
            // To update values
            (data=>{
                getProducts();
            })
        )

    });

});