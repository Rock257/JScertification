// function a() {
//     function c() {
//         console.log(b)
//     }
//     c();
// }
// var b =9 ;
// a();
// var b can be access outside of function  by invocation of function  c()

// function x() {
//     var z =100 ;
//     function y() {
//         console.log(z) ;
//     }
// y();
// }
// x() ;

// var z can also be access by outside of function y by invocation of function y  with the scope

//  //////////////what if we want to access if b from outside

// function a() {
//     var c =30

//     function b(){

//     }
//     b();
// }
// a();
// console.log(c)

//  output is c is not defined why???????????
// 

function b() {
   var a =50 ;
    function c() {
        console.log(a)
    }
    c()
}
b( )  