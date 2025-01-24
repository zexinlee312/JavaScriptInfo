// 对象有一个名为[[Prototype]]的隐藏属性，要么为null，要么为另一个对象，当对象找不到某个属性时，便会在原型上寻找
// 设置原型的方法__proto__(过时了)
let animal = {
  eat: true,
  walk() {
    console.log('Animal walk');
  },
};
let rabbit = {
  jump: true,
};
let longer = {
  __proto__: rabbit,
};

rabbit.__proto__ = animal; // 设置rabbit的原型为animal
console.log(rabbit.eat); // 找的animal
console.log(longer.walk()); //更长的原型链

// 写入不使用原型
rabbit.walk = function () {
  console.log('Rabbit walk');
};
rabbit.walk();

// this
let user = {
  age: 20,
  get name() {
    return this._name;
  },
  set name(str) {
    this._name = str;
  },
};
let admin = {
  __proto__: user,
  isAdmin: true,
};
user.name = 'John';
console.log(admin.name);
admin.name = 'Doe';
console.log(admin.name);
console.log('user name', user.name); // this仍然是.前面的对象

// for...in也会迭代继承的属性，可通过obj.hasOwnProperty()方法来筛选自己的属性
for (let prop in admin) {
  if (admin.hasOwnProperty(prop)) {
    console.log('admin own:', prop);
  } else {
    console.log('prototype own:', prop);
  }
}
