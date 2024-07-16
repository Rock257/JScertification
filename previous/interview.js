// function outer(b) {
   
//     function inner() {
//         console.log(a, b);
//     }
//     let a = 30;
//     return inner
// }
// // outer()(); === var  close = outer()
// var close = outer('hello world of Javascript');
// close(); 

// if outer function is also nested in a some anoter function it works same  YES / NO

// yes it work same if we nested the outer function in a another function 

// Example for the is 

function other(b) {
     let c = 500;
    function outer(b) {
   
        function inner() {
            console.log(a, b,c);
        }
        let a = 30;
        return inner
    }
     return outer(b);  
}
var close = other("heloo Js ");
close();
