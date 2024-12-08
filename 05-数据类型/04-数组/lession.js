// 声明
let fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[2] = 'pear';
fruits[3] = 'peach';
console.log(fruits[3]);
console.log(fruits.length);
console.log(fruits)
fruits[4] = {name: 'waterMelon', price: 30} //可以存储任何类型
console.log(fruits)

// at访问
console.log(fruits.at(1));
console.log(fruits.at(-1));// 最后一个元素

// pop/push/shift/unshift
console.log('================pop/push/shift/unshift===================')
console.log(fruits.pop());
console.log(fruits)
console.log(fruits.push('WaterMelon'))
console.log(fruits);
console.log(fruits.shift());
console.log(fruits)
console.log(fruits.unshift('Berry'));
console.log(fruits)

// 数组在js中是个特殊的对象
// 请将数组视为作用于 有序数据 的特殊结构。
// 它们为此提供了特殊的方法。数组在 JavaScript 引擎内部是经过特殊调整的，
// 使得更好地作用于连续的有序数据，所以请以正确的方式使用数组。
// 如果你需要任意键值，那很有可能实际上你需要的是常规对象 {}

// 循环
console.log("==============循环===================")
for (let fruit of fruits) {
  console.log(fruit);
}

// for..in 循环会遍历 所有属性，不仅仅是这些数字属性；for..in 循环适用于普通对象，并且做了对应的优化
// for (let fruit in fruits) {
//   console.log(fruit);
// }

// new Array 的问题
let array = new Array(2);
console.log(array.length);
console.log(array[1])

// 多维数组
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]
console.log(matrix)


