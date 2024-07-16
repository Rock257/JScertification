
// Promise Syntax 
4
// let myPromise = new Promise(function( myResolve ,myReject){

//     //producing code may take some time 

//     myResolve();  //When Sucessful
//     myReject();  // When Error
// });

//"Consuming Code" (Must wait fora fulfilled Promise)4

// myPromise.then{
//     function(value) { /* Code is succes*/} ,
//     function(error) { /* Code if some error */}
// };

// When the producing code obtains the result, it should call one of the two callbacks:

// Result	Call
// Success	myResolve(result value)
// Error	myReject(error object)

// Example


//  function1  = to show result 

 function displayCal(cal){
    document.getElementById("result").innerHTML = cal
 }

 
 function mulCal(x,y , displayCal){
   let  mul = x*y;
   displayCal(mul)
 }

 let resultMul = mulCal(350,410,displayCal);

//  In the example above, displayCal is the name of a function.

// It is passed to mulCal() as an argument.



setTimeout(myFunc ,3000);

function myFunc(){
    document.getElementById("setTime").innerHTML = "Hey This Is Me"
}

// myFunc will be passed as callback function in setTimeout 

 
// example  of a  digital watch   // 


// setInterval(watch , 1)

// function watch(){
//     const dateTime  = new Date;

//     document.getElementById("clock").innerHTML = dateTime.getHours() +":" + dateTime.getMinutes() +":" + dateTime.getSeconds() + ":" + dateTime.getMilliseconds() ;
// }

// in this watch is uses as callback function and passed in the setIntervel as argument  , 1000 is millisecond  (watch will be called every second 



// Promise  = producing code + consuming code

let myPromise = new Promise(function(myResolve ,myReject){

    //"Producing  Code " (may take some time ) 

    myResolve(); // when successful
    myReject();  // when error occured
})

// "Consuming code " (Must wait for a fullfilled Promise)

myPromise.then(
    function(value) {  /* code if successful */ },
    function(error) { /* code if successful */ }

)

//   Lets take an example of Promise  //

// function displayerMy(some){
//     document.getElementById("promiseExample") =some ;

// }

// let minePromise = new Promise(function (myResolve ,myReject){

//     let x = 0; 

//     // The producing code ( this may take some time)

//     if(x==9){
//         myResolve("Ok");
//     }
//     else{
//         myReject("Error")
//     }

// });

// minePromise.then(
//     function(value){displayerMy(value);},
//     function(error){displayerMy(error);}
// );

let p = new Promise((resolve ,reject ) =>{
    let a = 1+3;

    if(a==2){
        resolve("Succes");
    }
    else{
        reject("Error")
    }
})

p.then((message) => {
    console.log("This is  in the then " + message)
}).catch((message) =>{
    console.log("This is  in the catch  " + message)
})

