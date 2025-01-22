// 词法环境：
// 1.环境记录，存储所有局部变量作为其属性的对象
// 2.外部词法环境的引用，与外部代码关联

// Step1.变量
let phrase = "Hello World"; //这段代码只有一个词法环境：phrase: "Hello World"
phrase = "Bye"; // phrase: "Bye" 词法环境变化
// Step2.函数声明
function say(name) {
  console.log(`${phrase} ${name}`);
}

// say: function

// Step3.内部和外部词法环境
say("John"); // 调用时有两个词法环境：1.内部词法环境name: 'John' 2.外部词法环境
// 当代码访问变量时，从内部词法环境到外部词法环境直至全局词法环境搜索，找不到则报错

//Step4.返回函数
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter());
// counter的词法环境为空 makeCounter为count: 0 全局makeCounter: function和counter: function
// 每个函数都有名为[[Environment]]的隐藏属性，保存了对创建该函数的词法环境的引用，所以可以在外部获取函数内部的引用

// 闭包：函数可以访问器外部词法环境，javascript所有函数都是可以闭包的