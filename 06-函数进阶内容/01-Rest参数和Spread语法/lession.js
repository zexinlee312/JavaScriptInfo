// Rest参数 ...

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3, 4, 5, 6)); //传入几个都没关系，但只有定义的参数被用到

function showName(firstName, lastName, ...titles) {
  console.log(titles.length);
  return `${firstName} ${lastName}`;
}

showName('Julius', 'Caesar', 'Consul', 'Imperator');

// Spread语法
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [7, 8, 9];
console.log(Math.max(...arr1, ...arr2));

// 复制array/object，浅拷贝
let arr = [1, 2, 3];
let arrCopy = [...arr];
console.log(JSON.stringify(arrCopy) === JSON.stringify(arr));

let obj = {a: 1, b: 2};
let objCopy = {...obj};
console.log(JSON.stringify(objCopy) === JSON.stringify(obj));
