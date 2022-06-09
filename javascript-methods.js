// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let  temp = [];
  for (let i = 0; i < this.length; i++){
    temp.push(callbackFn(this[i], i, this));
  }
  return temp;
};
/*testing
const array1 = [1,2,3];
const map1 = array1.myMap((x) => x*6);
console.log(map1)
*/

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  let temp1 = [];
  let temp = initialValue;
  for (let i = 1; i < this.length; i++){
    temp = callbackFn(this[i-1], this[i]);
    this[i] = temp;
  }
  return temp;
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
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
  
};