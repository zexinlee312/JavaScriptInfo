// 新建对象
let user1 = new Object({name: 'John'});
let user2 = {};
console.log(user1);
console.log(user2);

// 文本和属性
let user3 = {
  name: 'John',
  age: 13,
};
user3.isFeMale = true;
console.log(user3);
delete user3.age;
console.log(user3);
user3.isFeMale = false;
console.log(user3);
console.log(user3.name);

// 方括号，编程规范不建议使用，通过任意表达式获取值
let key = 'name';
console.log(user3[key]);
console.log(user3.key); // 相当于访问key属性，没有定义

// 属性值简写,用已存在的变量当做属性名
let userName = 'Zexin';
let userAge = 26
let user4 = {userName, userAge}
console.log(user4.userName)

// 对象属性值限制： 无限制，需要注意__proto__
let user5 = {for: 5}
console.log(user5.for);

user5.__proto__ = 5;
console.log(user5.__proto__);

// 判断属性是否存在
let user6 = {
  a: 1,
  b: 2,
  c: undefined
}
console.log(user6.a !== undefined)
console.log('b' in user6);
console.log('c' in user6);

// for...in遍历对象
let user7 = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user7) {
  console.log('key: ' + key);
  console.log('val: ' + user7[key]);
}

// 对象访问顺序
// 数字按顺序，否则先添加先访问
let user8 = {
  1: 'a',
  2: 'b',
  40: 'c',
  30: 'd',
}
for (let key in user8) {
  console.log('key: ' + key);
  console.log('val: ' + user8[key]);
}
user3.height = '165'
for (let key in user3) {
  console.log('key: ' + key);
  console.log('val: ' + user3[key]);
}
