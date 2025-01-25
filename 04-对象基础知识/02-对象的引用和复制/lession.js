// let _ = require('lodash');

const { cloneDeep } = require('lodash');

// 对象存储的不是对象内容，而是其在内存中的地址
let user1 = {
  name: 'John',
};
let user2 = user1;
user2.name = 'Doe';
console.log(user1.name);

// 通过引用比较，对象只有指向相同时才相等
let user3 = {};
let user4 = user3;
let user5 = {};
console.log(user3 === user4);
console.log(user3 === user5);

// 克隆与合并
// 遍历对象原始类型层次的拷贝
let user6 = {
  name: 'Li',
  age: 30,
};

let cloneUser6 = {};
for (let key in user6) {
  cloneUser6[key] = user6[key];
}
console.log('cloneUser6', cloneUser6);

// Object.assign
let user7 = {
  surname: 'Zexin',
};
let cloneUser7 = {};
Object.assign(cloneUser7, user6, user7);
console.log(cloneUser7);

// 深层拷贝，通过三方库
let user8 = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};
let cloneUser8 = {};
// cloneUser8 = _.cloneDeep(user8);
cloneUser8 = cloneDeep(user8);
console.log(cloneUser8);
