function sayHi() {
  console.log('Hi')
}

let obj = {}
console.log(typeof sayHi);
console.log(typeof obj);

// name属性
console.log(sayHi.name);

// length属性，入参个数,rest不参与计数
function f1(a, b) {
}

console.log(f1.length)

// 自定义属性
function sayGood() {
  console.log('Good')
  sayGood.counter++;
}
sayGood.counter = 0;
sayGood();
console.log(sayGood.counter)