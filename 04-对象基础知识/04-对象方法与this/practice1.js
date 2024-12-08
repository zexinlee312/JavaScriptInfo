function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();
console.log(user.ref.name);
console.log(user.ref)

// undefined，nodejs中的全局this是什么？浏览器会是window,没有name属性

