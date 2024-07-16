function x() {
  console.log("Namaste");
}

function y(x) {
  x();
}

// here y() is the higher order function and x() is a callback function

// example //

// task to calculate area  of circle from array of radius

const radius = [3, 4, 6, 7, 9];

const calArea = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}; 

console.log(calArea(radius));

// circumference

const circumferenceRadius = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * 2 * radius[i]);
  }
  return output;
};

console.log(circumferenceRadius(radius));

// Diameter

const calDiameter = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(calDiameter(radius));

// modular code or reuseable code
// here in above problems we didnt follow DRY Principle in our code (Don't Repeat Yourself)

// the only logic is changes in above example
// to write its in a optimse way
