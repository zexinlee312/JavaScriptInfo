// // try...catch语法
// try {
//   haah;
// } catch (err) {
//   console.log('error', err);
// }

// // try...catch是同步执行的
// try {
//   setTimeout(() => {
//     hahaha;
//   }, 2000);
// } catch (error) {
//   console.log('myerror', error); //不是catch捕获的异常
// }

// // Error对象，主要就是name和message两个属性
// try {
//   lalala;
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

// try {
//   let str = '{a b}';
//   JSON.parse(str);
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

// try {
//   throw new Error('我故意抛出的错误');
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// try...catch...finally,最后一定会执行finally
try {
  throw new Error('an error ercur');
} catch (error) {
  console.log(error.message);
} finally {
  console.log('finally');
}
