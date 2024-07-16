// (1) function statement

function a() {
    console.log("a called") ;
}

// (2)function declaration is same as the function function

//  (3) function expression  - function storedinside a variable

var b = function () {
    console.log("b called ");
}

a();
b();

// Note : Function parameters are listed inside the parentheses () in the function definition.

//  Note : ?/// Function Return
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":

// Function arguments are the values received by the function when it is invoked.

// Inside the function, the arguments (the parameters) behave as local variables.

// /// Note : major difference b/w  function statement and function expression  is in Hoisting 
// try access function before its declaration 


//  (4) anonymous  function - a function without a name 

//      function ( ) {
  
//      }

// (Uncaught SyntaxError: Function statements require a function name (at function.js:24:1))


//   (5) Named expression function

var c = function  xyz() {
  
    console.log("hello world i am back")
} 
c();
// xyz();  - show reference error when called in global scope  by xyz() we call function at local scope inside function 


//   (6) First Class function  - function inside function as an argumen or the ability to usefirst class function used as values and can be  passed as argument in another function and can be return out of another function this ability all together called as first class function

// function are first class citizen and first class function 

function d(param1) {
    console.log(param1);
}
d( function() {

})


// pass the anonymous  function as a value fo parameter in function d
function abc() {

}
d(abc());

// passing  an anonymous function as argument or value in a function 

function a(para){
    console.log(para)
}

a(function (){
    
});

console.log(a())

