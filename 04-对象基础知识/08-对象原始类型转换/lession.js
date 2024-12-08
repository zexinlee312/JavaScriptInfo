// 为了进行转换，JavaScript 尝试查找并调用三个对象方法：
//
// 调用 obj[Symbol.toPrimitive](hint) —— 带有 symbol 键 Symbol.toPrimitive（系统 symbol）的方法，如果这个方法存在的话，
// 否则，如果 hint 是 "string" —— 尝试调用 obj.toString() 或 obj.valueOf()，无论哪个存在。
// 否则，如果 hint 是 "number" 或 "default" —— 尝试调用 obj.valueOf() 或 obj.toString()，无论哪个存在。
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};
console.log(+user);