// Do not change any of the funcxtion names

const multiplyByTen = (num) => {

console.log (num*10);
};
multiplyByTen(10);

const subtractFive = (num) => {
  return num-5;
};
console.log(subtractFive(10));

const areSameLength = (str1, str2) => {
  
  if(str1.length===str2.length)
  {
    console.log("true");
  }
    else{
      console.log("false")
    }
  };
  areSameLength("Asharani","Khanapure");

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if(x===y)
  {
    console.log("true");
  }
  else
  {
    console.log("false")
  }
};
areEqual(24,24);


const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  if(num<90)
  {
    console.log("true");

  }
  else{
    console.log("false")
  }
};
lessThanNinety(89);

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if(num>50)
  {
    console.log("true")

  }
  else{
    console.log("false")
  }
};
greaterThanFifty(75);

const add = (x, y) => {
  // add x and y together and return the value
  // code here
  console.log(x+y);
};
add (12,34);


const subtract = (x, y) => {
  // subtract y from x and return the value
  // code here
  console.log(x-y);
};
subtract(23,15);

const divide = (x, y) => {
  // divide x by y and return the value
  // code here
  console.log(x/y);
};
divide(60/3);

const multiply = (x, y) => {
  // multiply x by y and return the value
  // code here
  console.log(x*y);
};
multiply(34,5);

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  // code here
  console.log(x%y);
};
getRemainder(48%4);

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  // code here
  if(num%2==0)
  {
    console.log("true")
  }
  else
  {
    console.log("false")
  }
};
isEven(24);

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  // code here
  if(num%2==1)
  {
    console.log("true")
  }
  else
  {
    console.log("false")
  }
};
isOdd(23);

const square = (num) => {
  // square num and return the new value
  // code here
  console.log(num*num);
};
square(8);

const cube = (num) => {
  // cube num and return the new value
  // code here
  console.log(num*num*num);
};
cube(9);

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  // code here
  console.log(Math.pow(num,exponent))
};
raiseToPower(22);

const roundNumber = (num) => {
  // round num and return it
  // code here
  console.log(Math.round(num))
};
roundNumber(7.9);

const roundUp = (num) => {
  // round num up and return it
  // code here
  console.log(Math.ceil(num))
};
roundUp(0.3);

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  console.log(str + '!');
};
addExclamationPoint("Asharani");

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  let str3=firstName.concat(lastName);
  console.log(str3);
};
combineNames("Asharani","khanapure");

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  let str3="Hello".concat(name);
  console.log(str3);
};
getGreeting("sam");

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here
  console.log(length*width);
};
getRectangleArea(32,12);

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  // code here
  console.log(1/2*base*height);
};
getTriangleArea(4,5);

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  // code here
  console.log(Math.PI*radius*radius);
};
getCircleArea(9);

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  console.log(length*width*height);
};
getRectangularPrismVolume(5,4,6);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
