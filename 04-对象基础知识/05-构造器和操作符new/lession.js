// 构造函数，同常规函数，1.大写命名2.new操作符调用
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user1 = new User('Li');


// 封装单个对象
let user2 = new function() {
  this.name = 'Zhang'
}
console.log(user2)

// 构造器的return
// 没有return就往this里面塞，否则返回return 的内容
function GetUser() {
  this.name = 'John';
  return {
    name: 'Zhao'
  }
}

let user3 = new GetUser();
console.log(user3);

// 构造器中的方法
function Dog() {
  this.name = 'Snoppy';
  this.spark = function () {
    console.log(this.name);
  }
}
let dog = new Dog();
dog.spark()