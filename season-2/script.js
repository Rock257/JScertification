var n = 3 ;

const square = (num)=>{
    var ans = num*num 
    return ans ;
}


var square2 = console.log(square(n))
var square3 = console.log(square(4))

// how js works 

// global execution context  ->  1. memory component(memory allocation to all variable and function)  2. code execution  component 

//callstack maintaines the order of executions of execution contexts

// call stack  = execution context stack  = program stack = controll stack  = runtime stack = machine stack



// Web APIs 

// setTimeout
// fetch
// localStorage
// console
// location
// DOM APIs (document  )








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
