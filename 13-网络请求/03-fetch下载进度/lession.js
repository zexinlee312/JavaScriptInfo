// fetch方法可以跟进下载进度，不能跟进上传进度，具体通过response.body.getReader()
// done:为true代表接受不了完了
// value:字节的类型化数组：Uint8Array
// const reader = await response.body.getReader();
// while (true) {
//   const {done, value} = await reader.read();
//   if (done) { // 读取完为true
//     // ...
//   }
// }

// 示例：
const response = await fetch(
  'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100'
);
const reader = response.body.getReader();
const totalLength = +response.headers.get('Content-Length');
let recLength = 0;
let chunks = [];
while (true) {
  let { done, value } = await reader.read();
  if (done) {
    console.log('over!!!');
    break;
  }
  chunks.push(value);
  recLength += +value.length;
  console.log(`receive ${recLength} of ${totalLength}`);
}

// 将chunks的内容解析出来
