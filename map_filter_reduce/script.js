const arr = [3,5,7,8,9];

console.log(arr)

// Map = map  function use in taransformation of array  i.e every element of array 
   
// const output = arr.map(function)

const double = function(x){
    return x*2;
}
 
const output = arr.map(double)

console.log(output)

// triple the valueof arr 

const triple =function(x){
    return 3*x

}
console.log(arr.map(triple));

// square of array element

const square = function(x){
    return x*x;
}

console.log(arr.map(square))


const cube = function(x){
    return  x*x*x ;
}

const outputs = arr.map(cube)

console.log(outputs);


//  binary  - (toString = The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string. )  
// Convert a number to a string, using base 2(binary):
// 

const binary = (x)=>{
    return x.toString(2);
}

const out = arr.map(binary)

console.log(out)


const octal = (x)=>{
    return x.toString(8);
}

const outp = arr.map(octal)

console.log(outp)


// const hexaDecimal = (x)=>{
//     return x.toString(16);
// }

// passing functionas parameter in  i.e is lnown as higher order function is

// const outpu = arr.map( function hexaDecimal(x){
//     return x.toString(16)
// })



//  with Arrow function  //

const outpu = arr.map( (x)=>{
    return  x.toString(16)
})

console.log(outpu)















//   function declaration or statements  //

// function x(){
//     console.log('new life')
// }
// x();

//   function expresion   //

// const y = function(){
//     console.log('new life ,you have')
// }
// y();

//  arrow function  //

// const z = ()=>{
//     return' (Shiva God os Gods)'
// }
// z();
// ' (Shiva God os Gods)'