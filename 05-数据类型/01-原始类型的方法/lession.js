// 七大原始数据类型string number boolean null undefined symbol bigint
// 对象包装器String  Number Boolean BigInt
let str = 'hello world'
console.log(str.toUpperCase())

// null和undefined没有任何方法

// 不推荐使用对象包装器创建对象，例如会永远为true
let zero = new Number(0);
if (zero) {
  console.log(str.toUpperCase())
}

// 可以省略new
let one = Number('1');
console.log(typeof one)