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
/* testing
const myAarray = [1,2,3,4,5];
const isEven = myArray.mySome(function(even)){
  return even % 2 === 0;
});
console.log(isEven);
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
