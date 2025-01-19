// 缓存案例不适用对象方法
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // 可怕的 CPU 过载任务
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

worker.slow(2)

// 和之前例子中的代码相同
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x); // (**)
//     cache.set(x, result);
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow);
// worker.slow(2);
// let func = worker.slow;
// func(2)
// * 行this = undefined;

// 内建函数call(context, ...args)允许显示设置this,例如
let user = { name: 'John' };
function say() {
  console.log(this.name);
}
// say(); //undefined
say.call(user) // 显示声明了this

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // (**)
    cache.set(x, result);
    return result;
  };
}
worker.slow = cachingDecorator(worker.slow);
worker.slow(2);

// 在经过装饰之后，worker.slow 现在是包装器 function (x) { ... }。
// 因此，当 worker.slow(2) 执行时，包装器将 2 作为参数，并且 this=worker（它是点符号 . 之前的对象）。
// 在包装器内部，假设结果尚未缓存，func.call(this, x) 将当前的 this（=worker）和当前的参数（=2）传递给原始方法。
