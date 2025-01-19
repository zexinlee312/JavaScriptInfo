// 代码块{...}内声明了一个变量，该变量仅在该代码块内可见

// 嵌套函数：一个函数在另一个函数中创建
function sayBye(firstName, lastName) {
  function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  console.log('Bye' + getFullName(firstName, lastName));
}

// 可以返回一个嵌套函数
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());