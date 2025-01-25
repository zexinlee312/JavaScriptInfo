// 原型方法，__proto__是历史遗留过时方法
let animal = {
  run() {
    console.log('animal run');
  },
};
let rabbit = {
  // __proto__: animal, // 唯一不被反对使用的用途
  jump: function () {
    console.log('rabbit jump');
  },
};

Object.setPrototypeOf(rabbit, animal);
console.log(Object.getPrototypeOf(rabbit));
