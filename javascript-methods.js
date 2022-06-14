// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let  newArray = [];
  for (let i = 0; i < this.length; i++){
    newArray.push(callbackFn(this[i], i, this));
  }
  return newArray;
};
/*testing
const array1 = [1,2,3];
const map1 = array1.myMap((x) => x*6);
console.log(map1)
*/

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      newArray.push(this[i], i, this);
    }
  }
  return newArray;
};
/* testing
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length < 6);
console.log(result);
*/

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  for (let i=0; i < this.length; i++){
    if(callbackFn(this[i], i, this)){
      return true;
    }
  }
  return false;
};
/* Testing and comparing with array.some method
const myArray = [1,2,3,4,5];
const isEven = number => number % 2 === 0;
console.log(myArray.mySome(isEven));
console.log(myArray.some(isEven));
*/

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  let temparray = [];
  for (let i = 0; i < this.length ; i++) {
    if (!callbackFn(this[i], i , this))
    return false;
  }
  return true;
};

/* Testing 

const array3 = [5,10,15,35];
const LessThan30 = array3.myEvery(function(num){
  return num < 30;
});
console.log(LessThan30);
*/
// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  let newArray = initialValue;
  for (let i = 1; i < this.length; i++){
    newArray = callbackFn(this[i-1], this[i]);
    this[i] = newArray;
  }
  return newArray;
};
/* testing
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);
*/

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement) {
      return true;
    }
  }
  return false;
};
/* testing
const array1 = [1, 2, 3];
console.log(array1.myIncludes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('cat'));
console.log(pets.myIncludes('bat'));
*/

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  for (let i=0; i < this.length; i++){
    if (this[i] == searchElement){
      return i;
    }
  }
  return -1;
};
/*
Testing and comparing with array.indexOf method
const myArray = [1,2,3,4,5];
console.log(myArray.myIndexOf(1));
console.log(myArray.indexOf(1));
*/

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  let i = this.length - 1;
  if(searchElement)
      for (i ; i >= 0 ; i--) {
        if (this[i] == searchElement)
        return i;
      }
      return -1;
};


// Testing
/*
const names = ["Jack" , "Ivan" , "Mason" , "Ivan" , "Jay", "Jack" , "Mason"];
const idx = names.myLastIndexOf("Mason");
console.log(idx);
*/

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  let newArray = [];
  for (const key in object){        
    newArray.push(key);
  }
  return newArray;
};

/* testing
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
  er: "something"
};

console.log(Object.keys(object1));
console.log(Object.myKeys(object1));
*/

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
  let myArray = [];
  for (const value in object){        
    myArray.push(object[value]);
  }  
  return myArray;
};

/* testing and comparing with Object.values method
const myObject = {
  a: 1,
  b: "Something",
  c: false,
  d: null
};
console.log(Object.values(myObject));
console.log(Object.myValues(myObject));  */ 

