// class基本语法，new 这个类时，通过constructor创建了一个对象
// class XXX {
//   constructor() {};
//   method1() {};
//   method2() {};
//   ...
// }
var User = /** @class */ (function () {
    function User(name) {
        this.name = '';
        this.name = name;
    }
    User.prototype.sayName = function () {
        console.log("Hello, ".concat(this.name));
    };
    return User;
}());
var user1 = new User('John');
user1.sayName();
// 理解class，class的构造做了如下的事情：
// 1.创建一个名为User的函数，函数代码源自constructor
// 2.储存类中的方法
console.log(User.prototype.constructor === User);
console.log(User.prototype.sayName);
// getter/setter:与函数差不多
var Animal = /** @class */ (function () {
    function Animal(name) {
        this._name = '';
        this._name = name;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (str) {
            this._name = str;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var tiger = new Animal('Tiger');
console.log(tiger.name);
tiger.name = 'Kitty';
console.log(tiger.name);
