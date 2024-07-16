const radius = [3, 4, 6, 7, 9];

const calArea = function(radius){
    const output = [];

    for(i=0; i<radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;

}

console.log(calArea);

// (5) [28.274333882308138, 50.26548245743669, 113.09733552923255, 153.93804002589985, 254.46900494077323]
  

const calDia = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2*radius[i]);
  }
  return output;
}; 

console.log(calDia(radius));

//   output =VM196:11 (5) [6, 8, 12, 14, 18]


const calCircumference = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2*Math.PI*radius[i]);
  }
  return output;
}; 

console.log(calCircumference(radius));

//  output = VM378:11 (5) [18.84955592153876, 25.132741228718345, 37.69911184307752, 43.982297150257104, 56.548667764616276]


//               Higer Order uses            //     


const area = function(radius){
    return Math.PI*radius*radius;

}

const dia = function(){
    return 2*radius;
}

const circumCircle = function(){
    return 2*Map.PI*radius;
}


const calculate  = function (radius , logic){
    const output = [];
    
    for(i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output
}
console.log(calculate(radius,area));
console.log(calculate(radius ,dia));
console.log(calculate(radius,circumCircle));



//  USING MAP FUNCTION //

// the calculate function  and map function are work similar and provide same output 



console.log(radius.map(area));
console.log(radius.map(dia));
console.log(radius.map(circumCircle));