// settimeout  

// function a(){
//     console.log('hello');
// }
// a();
// console.log('b');

// console.log('start');

// setTimeout( function x() {

//     console.log("callback");
// }, 5000);

// console.log('end');
 

// ///// DOM




// console.log("start");

// document.getElementById("btn").addEventListener("click", function cb() {
//     console.log("callback");

// });
// document.getElementById('btn1').addEventListener('click' , function love(){
//     console.log("Maine tum se ye sun ne ke liye kitna intzaar kiya hai love you to rahul ")
// });

// setTimeout( function x() {
//     console.log("Love you  soliha");
// },3000)
// console.log("end")



//  / / fetch

console.log("start");

setTimeout( function cbt() {
    console.log('CB Settimeout')
},5000)

fetch ('http://api.netflix.com').then( function cbf(){
    console.log('cb netflix');
})

console.log('end')