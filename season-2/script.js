console.log("hello");
console.log("season -2");

setTimeout(function () {
    console.log("Namastey Javascript");
}, 3000);

const cart = ["shirt", "paint", "kurta"];

// suppose we have taccess two backend api

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(
            function(){
                api.updadeWallet()
            }
            
        );

    });

});
//  to create order

// first we have create an order once the order is created then only we can proceed to payment
// there is dependency in code
// because this is an async operation , Callback comes into picture
