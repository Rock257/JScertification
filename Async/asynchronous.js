
function myDisplayer(some){
    document.getElementById('secEx2').innerHTML =some
}

function myCalculator(num1 , num2 ,myCallback){

    let divide = num1/num2 ;

    myCallback(divide);
}

myCalculator(50,5 ,myDisplayer)

// In the example above, myDisplayer is the name of a function.

// It is passed to myCalculator() as an argument.



// Waiting for a Timeout // 

// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out :

setTimeout(myFunction ,3000);

function myFunction(){

    document.getElementById("settimeout").innerHTML = "Waiting For Timeout function will be passed in the setTimeout() as Argument the whole complete function will be passed as argument and myFunction will be called after 3 seconds  " 
}

//  Ex.  4 // 

setInterval( myFunction, 1000);


function myFunction(){
    let newTime = new Date ;
    document.getElementById("settime").innerHTML  =  newTime.getHours() +":" + newTime.getMinutes() +":"+ newTime.getSeconds()
}

// asynchronus programmes are difficult to write and difficult to debug.

// most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.



// Function Sequence : JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined // 

// function myFun1(){
//     alert("Hello World")
// }

// function myFun2(){
//     alert("Bye World")
// };

// myFun2();
// myFun1();


