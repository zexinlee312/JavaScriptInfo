// Promise链：then（）处理可以返回一个新的Promise对象
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
})
  .then((result) => {
    console.log('result 1: ', result);
    return result * 2;
  })
  .then((result) => {
    console.log('result 2: ', result);
    return result * 2;
  })
  .then((result) => {
    console.log('result 3: ', result);
    return result * 2;
  });

// 返回Promise
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    console.log(`result 1: ${result}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    console.log(`result 2: ${result}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    console.log(`result 3: ${result}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  });
