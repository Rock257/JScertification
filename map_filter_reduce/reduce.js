// hello = () => {
//     document.getElementById("demo").innerHTML += this;
//   }


// reduce() function

// sum of array element   non functional method

// to find sum


// arr = [3, 5, 6, 2, 8, 7, 9, 20];

// findSum = () => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// };
// const output = findSum();
// console.log(output);


// output //
// 60

// using redue function



// array = [98, 2, , 55, 300];
// const arrsum = array.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// });
// console.log(arrsum);


//           MAX. NO, IN A ARRAY       //

arr = [3,5, 6, 2, 8, 7, 9, 20];

// maxNum = (arr) =>{
//    let max = 0;
//     for(let i=0 ; i<arr.length; i++){

//         if(arr[i]> max){   
//             max = arr[i];
//         } 
        
//     }
//     return max;
// }
// console.log(maxNum(arr));


const maximumNum = arr.reduce((acc,curr)=>{

       if(curr>acc){
       acc = curr
    }
    return acc
})

console.log(maximumNum);
