// function x() {
//     var a = 30;
//     function y() {
//         console.log(a) ;
//     }
//     return y
// }

// we can also  retun fuction out of function
// var c = x();
// console.log(c)

// function along with its lexical scope  bundled together forms a  closures
// or function along with scope


// x(function z(){
//     var f = 333;
//     console.log(f);
// })

// we can pass function as parameter in function invocation also

function z() {
    b = 500;
    function  y(){
        var a =400;
        function x() {
            console.log(a,b);
        }
        x();
    }
    y();

}
z();




