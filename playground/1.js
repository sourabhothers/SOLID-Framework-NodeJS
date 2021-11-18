const cloneDeep = require('clone-deep');

let cl = (a) => {
  console.log(a);
};

const obj = {
  a: cl,
  b: cl,
};
console.log(cl === obj.a);
obj.a('a');
cl = '';
console.log(cl === obj.a);
obj.b('b');

// const func = (a) => {
//   console.log(a);
// };

// const sayHello = [func, func, func];

// const firstObj = {
//   count: 1,
//   sayHello,
// };

// const secondObj = firstObj;

// const arrObjects = [firstObj, secondObj];

// const clonedArr = cloneDeep(arrObjects);

// console.log(arrObjects[0].sayHello[0] === clonedArr[1].sayHello[1]);

// clonedArr[1].sayHello[0] = (b) => {
//   console.log(` another${b}`);
// };
// arrObjects[0].sayHello[0]('hello');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1);
