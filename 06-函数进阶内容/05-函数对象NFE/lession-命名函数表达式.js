// 1.允许函数在内部引用自己
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // 现在一切正常
  }
};

// 2.函数外是不可见的
// func('HH')

// 多数情况下可以嵌套调用，除了下面这个情况
// let welcome = sayHi;
// sayHi = null;
// welcome();