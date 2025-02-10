// 通过export和import交换功能
import { sayHi } from './sayHi.js';
import './sayHi.js';
// sayHi();

// 每个模块都有自己的作用域
// import './sayHi.js'; //只输出了一次

// import.meta包含当前模块的信息
console.log(import.meta);
