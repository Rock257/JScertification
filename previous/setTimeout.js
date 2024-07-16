function a() {
    var j = 30;
    setTimeout( function () {
        console.log(j);
    }, 3000 )
    console.log("Moto edge");
}
a();

// function x() {
//     var j =555;
//     setTimeout( function () {
//         console.log(j);
//         console.log('hey its me')
//     } , 2000) ;
//     console.log('No regreat')
  
// }
// x();

function x() {
    for(let i =1 ; i<=5 ; i++){
        setTimeout(function () {
            console.log(i);
        }, i*3000);
    }
    console.log('hello world')
}
x();
