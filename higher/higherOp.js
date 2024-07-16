const radius = [3, 4, 6, 7, 9];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const Diameter = function (radius) {
  return 2 * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const calculate = function (radius, logic) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));

//   Use map function   //

console.log(radius.map(area))




// map function works equivalent to our function calculate

// const calculate = function (radius, logic) {
//   const output = [];
//   for (i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };



// console.log(calculate(radius, Diameter));
// console.log(calculate(radius, circumference));


// here   calculate function is the higher order function and (area,Diameter,circumference ) are callback function 




