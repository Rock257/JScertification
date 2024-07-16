// block = a block is defined by {  }  curly braces also known as compound statements 
// a block is used to multiple JS statements into a group the will be used  where JS  expects single statements  and we need to add multiple statements instead of single statements

let b = 500
{
    var a =100;
    let b = 20;
    const c = 400;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(b)



// console.log(a)
// console.log(b)
// console.log(c)

//  block scope is used becaues the scope of let and const are in block only accessiciable in the block outside the block not  accessiciable JS shows error for
// console.log(a) = accessiciable
// console.log(b) = not  accessiciable outside the block
// console.log(c) = not  accessiciable outside the block
