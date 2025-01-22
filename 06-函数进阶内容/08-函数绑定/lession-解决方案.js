// func.bind(context) 绑定this
let user = {
  name: 'John',
}

function func() {
  console.log(`Hello, ${this.name}`);
}

let funcUser = func.bind(user);
funcUser();

let user2 = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
}

let sayHi = user2.sayHi.bind(user2);
setTimeout(sayHi, 2000);