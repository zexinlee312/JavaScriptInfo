// new F(),F.prototype指向一个对象，那么通过F创建的对象的[[Prototype]]指向该对象
let animal = {
  eat: 'food',
};

function Tiger() {
  this.color = 'Yello';
}

Tiger.prototype = animal;
let tiger1 = new Tiger();
console.log(tiger1.eat);

// 默认的F.prototype为构造器属性的对象{constructor: F}
function Rabbit(name) {
  this.name = name;
}
console.log(Rabbit.prototype.constructor === Rabbit);
let rabbit = new Rabbit.prototype.constructor('Bee');
console.log(rabbit.name);
// 需要注意的一点是默认的constructor由我们决定，
Rabbit.prototype = {
  jump: true,
};
let rabbit2 = new Rabbit('Pee');
console.log(rabbit2.jump);
