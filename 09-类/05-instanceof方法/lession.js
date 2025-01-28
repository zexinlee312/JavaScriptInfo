// instanceof方法用于检查对象是否属于某个class（或者衍生类）
class Animal {}

class Rabbit extends Animal {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Animal);
