// async:表明函数返回一个Promise，哪怕返回的不是Promise也会封装
async function func1() {
  return 1;
}
let promise1 = func1();
promise1.then((result) => {
  console.log(result);
});

// await让javascript引擎等待到promise执行完
async function func2() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
  let result = await promise;
  return result;
}
let promise2 = func2();
promise2.then((result) => {
  console.log('result func2: ', result);
});
