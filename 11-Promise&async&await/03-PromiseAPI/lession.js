// Promise.all:并行执行多个promise，并等待所有promise resolve,如果iterable内容不是Promise则原样返回
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  4,
]).then((result) => {
  console.log('result ', result);
});

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1)), 3000),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error())), 2000),
//   new Promise((resolve) => setTimeout(() => resolve(3)), 1000),
//   4,
// ]).then((result) => {
//   console.log('result ', result);
// }); // 如果其中一个Promise reject，整个reject

// 如果我们允许其中的Promise reject，则可以使用allSettled
// result会是一个对象数组，对象{status: 'fulfilled', value: xxx} 和 {status: 'rejected', reason: xxx}
Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('error')), 2000)
  ),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]).then((result) => {
  console.log('result all settled', result);
});

// Promise.race: 第一个settled的
// Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 4000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error()), 1000)),
// ]).then((result) => {
//   console.log('result ', result);
// });

// Promise.any: 第一个fulfilled的
Promise.any([
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 4000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
]).then((result) => {
  console.log('result any ', result);
});
