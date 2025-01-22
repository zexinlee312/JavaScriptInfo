// 对象属性的两种类型：数据属性  访问器属性
// let obj = {
//   get propName() {},
//   set propName(str) {},
// }
let user = {
  name: 'John',
  surname: 'Smith',
  get fullName() {
    return `${this.name}-${this.surname}`;
  },
  set fullName(str) {
    if (str.indexOf('-') === -1) {
      console.log('Wrong format');
    }
    let [name, surname] = str.split('-');
    this.name = name;
    this.surname = surname;
  },
};

console.log(user.fullName);
user.fullName = 'BenSimmons';
user.fullName = 'Ben-Simmons';
console.log(user.fullName);

// 访问器属性描述符
// get set configurable enumerable

// 约定：_的属性一般表示内部属性，不应该在外部访问
let user2 = {
  get name() {
    return this._name;
  },
  set name(str) {
    this._name = str;
  },
};
