// function x(){ 
//     var a = 20;
//     function y() {
//         console.log(a)
//     }
//     return y
// }
// var z = x();
// console.log(z)

// once the function y() return outside , as the function is in the function x() we return the function from it as the execution context of x is vanished  totally

// now the function y() will no longer  reside in the function x()  then how will it behave outside the x()  , then how will it behave in other lexical scope
// now the z() have a reference  or function y() inside it  now how it will be behave outside the scope before it was inside x()

// z()

// print No from 1 to 5  with interval og 3 sec 

function x() {
    for( let i =1; i<=5; i++) {
        setTimeout( function (){
            console.log(i);
        },2000);
    }
    console.log('Hello JS');
}

x();

function y() {
    for( var j =6; j<=15; j++ ){
        function close(j){
            setTimeout( function() {
                console.log(j);
            } , j*1000);
        }
        close(j);
    }
    console.log("we can also did with var by giving every time new value of 'j' as everytime the close function is called  it get a new copy of j with different memory location ")

}
y();