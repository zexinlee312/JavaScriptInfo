let user = {
  name: 'John',
  sayHi: function() {
    console.log(`Hello, ${this.name}`);
  }
}
setTimeout(user.sayHi, 1000) //这是因为 setTimeout 获取到了函数 user.sayHi，但它和对象分离开了。