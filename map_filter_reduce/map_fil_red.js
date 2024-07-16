// map() - map() creates a new array from calling a function for every array element.

        // map() does not execute the function for empty elements.

        // map() does not change the original array. 
        
//  Example :  Return a new array with the square root of all element values

// Syntax
// array.map(function(currentValue, index, arr), thisValue)

// Parameters

// Parameter	Description
// function()	Required.
// A function to be run for each array element.
// currentValue	Required.
// The value of the current element.
// index	Optional.
// The index of the current element.
// arr	Optional.
// The array of the current element.
// thisValue	Optional.
// Default value undefined.
// A value passed to the function to be used as its this value.

// The map(), reduce() and filter() are array functions that transform the array according to the applied function and return the updated array

numbers = [4,9,16,25] 

console.log(numbers)

const newArr = numbers.map(Math.sqrt);

let a = Math.pow(2, 6);   //  2^6 

console.log(a)

// console.log(newArr);

//square of an array 

arrays = [2,4,6,5,8,9] ;

const square =  function(arrays){

    const output = [];

    for( let i=0; i<arrays.length; i++){
        output.push(arrays[i]*arrays[i])
    }
    return output
}

console.log(square(arrays))


listArray = [ 2,5,8,3,9,7];

const area  = (listArray) =>{

    areaOutput = []

    for(i=0; i<listArray.length; i++){
        areaOutput.push(2*Math.PI*listArray[i])
    }
    return areaOutput ;
}

console.log(area(listArray));

radius = [3,5,6,7,8,9,10,1 ,16];

function areas(){

    const Area = [] ;

    for(let i=0; i<radius.length; i++){
        Area.push(Math.PI*radius[i]*radius[i]);
    }
    return Area ;
}
console.log(areas(radius))


const sqrtradius = radius.map(Math.sqrt);

console.log(sqrtradius)


//multiply all the no. in array with a number 

num = [1,2,3,4,5,6,7,8,9,10] ;

function myTable(num){
    return num*9
}
const numTable = num.map(myTable)

console.log(numTable)

// get the full name method 

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];


  function myName(i){
    return i.firstname +" " + i.lastname
  }
const getFullname = persons.map(myName);

console.log(getFullname)


// Math  : The JavaScript Math object allows you to perform mathematical tasks on numbers.

console.log(Math.PI) 
console.log(Math.E) 
console.log(Math.sqrt(64)) 
console.log(Math.SQRT2)
console.log(Math.LN10)
console.log(Math.round(3.49999)) // 3
console.log(Math.round(3.5))   // 4
console.log(Math.ceil(-4.6))   // -4

// ceil( ) differs from Math. round( ) in that it always rounds up, rather than rounding up or down to the closest integer. Also note that Math. ceil( ) does not round negative numbers to larger negative numbers; it rounds them up toward zero.

console.log(Math.floor(-4.9))  // -5

console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(20)); 

// to calculate  power

console.log(Math.pow(2,5))
console.log(Math.pow(5,4))  

// Math.abs(x) returns the absolute (positive) value of x:

console.log(Math.abs(-4.6))


arrays = [88,44,3,2,47,5,685] 


console.log(Math.max(88,44,3,2,47,5,685 ))

console.log(Math.min(88,44,3,2,47,5,685 ))




console.log(Math.random())

console.log(Math.floor(Math.random()*99));


function triple(i){
    return i*3
}

letArray = [33,4,55,8,4];


const new_array = letArray.map(triple)

console.log(new_array)


// using map find table of 9

function tableTen(n){
    return n*9;
}

numArr = [1,2,3,4,5,6,7,8,9,10];

const newNUmArr = numArr.map(tableTen);

console.log(newNUmArr)
document.getElementById("table").innerHTML = newNUmArr

// reduce()  => reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a function. It is an alternative of using a loop and updating the result for every scanned element. Reduce can be used in place of the following code:


// arr = new Array(1, 2, 3, 6, 5, 4);
// result = 1
// for(let i = 0; i < 6; i++) {
//     result = result * arr[i];
// }

//Synatx  
// array.reduce(function_to_be_applied)
// array.reduce(function (args) {
//     // code;
// })


// reduce function is used for Sum , to find Max and Min. in array by iteration through array

// take without reduce 

numArray = [1,2,3,4,5,6,7,8,9,10];

function findSum(numArray){
    let sum = 0;
    for(let i=0; i<numArray.length; i++){
        sum = sum +numArray[i];
    }
    return sum
}
console.log(findSum(numArray));

// Biggest Number in a array 

nums = [10,2,943,594,253,26,73,8,439,10];

const biggestNumberInArray = function (nums){
    //the largest no. at first should be the first elemnt or null for empty array


    var largest = nums[0] || null ;

    // Current number , handled by the loop
    // JavaScript, null is a special value that represents an empty or unknown value.,variable is empty at the moment and may have a value later.

    var numbe = null;
    for(var i = 0; i <nums.length; i++){
        //update current number
        numbe = nums[i];

        //Compare stored largest number 
        largest = Math.max(largest,numbe)
    }
    return largest

}

console.log(biggestNumberInArray)

// Max no. using reduce function

newMaxArr =[594,253,26,73,8,439,1 ,402,1003]

const maximumNum  = newMaxArr.reduce((acc, curr)=>{
    if(curr>acc){
        acc = curr
    }
    return acc
})
console.log(maximumNum)






// map() function uses 

// const person  = [
//     {fName : "Rahul" , lName :"Soni"},
//     {fName : "Shurti" , lName :"Joshi"},
//     {fName : "Radhika" , lName :"Bashir"}
// ]

// function getFullName(item) {
//     return [item.fName ,item.lName].join("")
    
// }

// person.map(getFullName);

// Example. 2

// const arr = [3,5,6,7]

// arr.map((num)=>{
//     return  num*2
// })
