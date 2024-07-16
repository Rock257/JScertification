function myDisplayer(some){
    document.getElementById("myDisplay").innerHTML = some;
}

function first(){
    myDisplayer("Hello")
}

function second(){
    myDisplayer("Goodbye")
    
}
second();
first();


// function first(){
//     return console.log("Hello")
// }

// function second(){
//     return console.log("Goodbye")
// }

// first();
// second();


//Ex .2 Suppose you want to do a calculation, and then display the result.
function myDisplayer(some){
    document.getElementById("cal").innerHTML = some;
}

function calculateSum(num1 ,num2){
    let sum =num1 +num2 ;
    return sum
}

let result = calculateSum(45,69)

const showResult = document.getElementById("cal").innerHTML =result;


//  JavaScript Callbacks
// A callback is a function passed as an argument to another function.



function myDisplays(call){
    document.getElementById('mulCal').innerHTML =call;
}

function myCal(num1 ,num2, myCallback){
    let mul = num1*num2 ;
    myCallback(mul);

}

myCal(20,30,myDisplays);

// In the example above, myDisplayer is a called a callback function.

// It is passed to myCalculator() as an argument.

// Ex.3 

const numbers = [3,5,8,6,9,2,-9];

// call removeNeg with a callback

const posNum = removeNeg(numbers , (x) =>x >=0);

// Display Result

document.getElementById("ex-3").innerHTML =posNum ;

//Keep only postive No. 

function removeNeg(numbers , callback){
    const myArray =[];
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray
}

// In the example above, (x) => x >= 0 is a callback function.

// It is passed to removeNeg() as an argument.