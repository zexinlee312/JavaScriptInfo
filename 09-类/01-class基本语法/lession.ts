// class基本语法，new 这个类时，通过constructor创建了一个对象
// class XXX {
//   constructor() {};
//   method1() {};
//   method2() {};
//   ...
// }
class User {
  private name: string = '';
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`Hello, ${this.name}`);
  }
}
const user1 = new User('John');
user1.sayName();

// 理解class，class的构造做了如下的事情：
// 1.创建一个名为User的函数，函数代码源自constructor
// 2.储存类中的方法
console.log(User.prototype.constructor === User);
console.log(User.prototype.sayName);

// getter/setter:与函数差不多
class Animal {
  _name: string = ''; // class字段
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(str: string) {
    this._name = str;
  }
}
let tiger = new Animal('Tiger');
console.log(tiger.name);
tiger.name = 'Kitty';
console.log(tiger.name);
