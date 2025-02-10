// 基本语法：let promise = fetch(url, [options])
// 第一阶段：服务器返回响应头，fetch用内置Response对象解析
// 第二阶段：通过其他方法获取response body（Response 提供了多种基于 promise 的方法）
// let response = await fetch(url); // 第一阶段

// if (response.ok) { // 如果 HTTP 状态码为 200-299
//   // 获取 response body（此方法会在下面解释）
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }
let url =
  'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url, {
  headers: {}, // 浏览器控制了一些headers无法设置 forbidden HTTP headers
});
// response header
console.log('response header', response.headers.get('Content-Type'));
if (response.status === 200) {
  let commits = await response.json();
  // let commits = await response.text();
  // 只能使用一种方法处理，因为执行过该方法内容已经处理过了
  // console.log(commits);
}
// console.log(response);

// POST请求
// let user = { name: 'Zexin', age: 27 };
// let request = await fetch('/user', {
//   headers: {
//     method: 'POST',
//     'Content-Type': 'application/json;charset=utf-8',
//     body: JSON.stringify(user),
//   },
// });
// let res = await request.json();
