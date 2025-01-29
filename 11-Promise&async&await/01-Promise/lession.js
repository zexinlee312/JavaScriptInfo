// Promise语法
// let promise = new Promise(function(resolve, reject) {
//   // executor代码
// })
// 1. Promise被创建是executor代码会自动执行，这段代码产出最终结果
// 2. resolve和reject是两个回调函数，由js提供
// 2.1 成功执行resolve(value)
// 2.2 错误执行reject(error)
// 3. 状态变化,resole reject的promise都是settled
// new Promise():{state:'Pending', result: undefined}
// -resolve(value)-> {state:'fullfilled', result: value}
// -reject(error)-> {state:'rejected', result: error}
let promise1 = new Promise((resolve, reject) => {
  resolve(123);
});
let promise2 = new Promise((resolve, reject) => {
  reject(new Error('promise error'));
});

// 消费者
// .then
// promise1.then((value) => {
//   console.log("promise1's value: ", value);
// });
// promise2.then(
//   (result) => console.log(result),
//   (error) => console.log(error.message)
// );
// 如果只对error感兴趣则可以使用.catch
promise2.catch((error) => {
  console.log(error.message);
});

// finally:1.我们不知道执行成功与否，没有参数 2.不应该返回任何内容
promise1
  .finally(() => console.log('run finally'))
  .then((result) => {
    console.log('then result', result);
  });
