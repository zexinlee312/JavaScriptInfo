// 属性标志
// 对象的属性除了value外的三个特殊属性
// writable: 可修改
// enumerable: 可展示
// configurable: 可删除
let user = {
	name: 'John',
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor));

// 修改标志可以用Object.defineProperty
let user2 = {}
Object.defineProperty(user2, 'name', {
	value: 'Harden'
})
console.log(user2) //打印为{}
let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');
console.log(JSON.stringify(descriptor2))

// 只读
let user3 = {
	name: 'Doc',
  toString() {
    return 'Hi' + 'Doc';
  }
};
Object.defineProperty(user3, 'name', {
  writable: false,
});
user3.name = 'Glen'; // 无效
console.log(user3)

// 不可枚举
Object.defineProperty(user3, 'name', {
  enumerable: false,
});
console.log(user3) // 只剩下toString

// 不可配置（不可删除）
let user4 = {
  name: 'Ning',
};
Object.defineProperty(user4, 'name', {
  configurable: false,
});
delete user4.name;
console.log(user4) //name还是存在

// 探索一下Pi
let descriptor3 = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(JSON.stringify(descriptor3, null, 2));

// 设置多个descriptor
let user5 = {};
Object.defineProperties(user5, {
  'name': { value: 'John', writable: true, enumerable: true, configurable: true },
  'age': { value: '25', writable: true, enumerable: true, configurable: true }
});
console.log(user5);

const map = Object.getOwnPropertyDescriptors(user5);
for (let key in map) {
  console.log('key: ' + key + " value: " + user5[key]);
}