// 两种原始类型可以作为obj的键：string和symbol
let one = Symbol();
let objOne = {
  one: one,
  two: 'two'
}
console.log(objOne);

// symbol 保证是唯一的。即使我们创建了许多具有相同描述的 symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。
let symbolOne = Symbol('id');
let symbolTwo = Symbol('id');
console.log(symbolOne === symbolTwo);

// symbol不会自动转化为string
console.log(symbolOne)
console.log(symbolOne.toString())
console.log(symbolOne.description)

// 隐藏属性，向对象添加属性不会被覆盖
let user = {
  name: 'John',
  age: 25,
  id: 1
}
let age = Symbol('age');
user[age] = 35;
user.id = 2
console.log(user);

// 对象中的symbol
let id = Symbol('id')
let user2 = {
  name: 'Tim',
  [id]: '1'
}
console.log(user2);

// for...in不会遍历symbol
for (let key in user2) {
  console.log(user2[key]);
}

// assign会复制symbol
let user3 = Object.assign({}, user2);
console.log(user3);

// 全局Symbol
let symbol3 = Symbol.for('test')
let symbol4 = Symbol.for('test');
console.log(symbol4 === symbol3);
let symbolKey = Symbol.keyFor(symbol3);
console.log(symbolKey)
