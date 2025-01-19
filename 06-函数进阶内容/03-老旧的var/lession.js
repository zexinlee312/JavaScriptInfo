// var没有块级作用域
if (true) {
  var test = true;
}
console.log(test);

// var允许重复声明
// var声明的变量可以在声明语句前使用

// IIFE 立即调用函数表达式：创建一个函数表达式并立即调用
(function () {
  var message = 'Hello';
  console.log(message);
})(); //代码立即执行并且拥有了自己的私有变量
// console.log(message); // 无法访问