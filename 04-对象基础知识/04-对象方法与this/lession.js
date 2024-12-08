'use strict'
// JavaScript中，行为由对象中的函数表示
let user1 = {
  name: "John",
  age: 18
}
user1.sayHello = function () {
  console.log("Hello");
}
user1.sayHello();

function sayHi () {
  console.log("Hi");
}
user1.sayHi = sayHi;
user1.sayHi();

// 方法简写
let user2 =  {
  name: 'Tim',
  sayHello: ()=> {
    console.log('Hello');
  }
}
user2.sayHello();

// 方法中的this，对象方法访问对象
let user3 = {
  name: 'Marry',
  sayInfo() {
    console.log(this.name)
  }
}
user3.sayInfo();

// this是实时计算出来的，函数中的this指向的是调用对象
let user4 = {
  name: 'Four',
}
let user5 = {name: 'Five'}
function sayName () {
  console.log(this.name);
}
user4.func = sayName;
user5.f = sayName;
user4.func();
user5.f();

// 严格模式下 this默认是undefined
function sayHello() {
  console.log(this)
}
sayHello();

// 箭头函数没有自己的this 取决于上下文
let user6 = {
  name: 'Russel',
  sayHello() {
    let print = () => {
      console.log(this.name);
    }
    print();
  }
}
user6.sayHello();