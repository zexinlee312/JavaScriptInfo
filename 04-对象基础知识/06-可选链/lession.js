// 如果可选链 ?. 前面的值为 undefined 或者 null，它会停止运算并返回 undefined
let user = {}
// console.log(user.name.surname)
console.log(user.name?.surname)

// 短路效应，不会继续运算
let user2 = null;
let x = 0;
user2?.sayHello(x++);
console.log(x)

// ?.()  ?.[]
let userAdmin = {
  admin: () => {
    console.log('Admin');
  }
}
let userGuest = {}
userAdmin.admin?.();
userGuest.admin?.();

let user4 = {
  firstName: 'John',
}
let user5 = {}
console.log(user4?.['firstName'])
console.log(user5?.['firstName'])
