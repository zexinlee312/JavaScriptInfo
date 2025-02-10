// nodejs中不含该模块，用html打开浏览器调试
// 异步
// 第一步：创建XMLHttpRequest对象
const xhr = new XMLHttpRequest();
// 第二步：适配请求xhr.open(method, url, [async, username, password])
// 默认async为true，开启异步
xhr.open('GET', 'http://localhost:3000/message', true);
// 第三步：发送请求
xhr.send();
// 第四步：获取响应
xhr.onload = () => {
  console.log(`${xhr.status},${xhr.response}`);
};
xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    // alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // 没有 Content-Length
  }
};

// 响应类型 "" "text" "json" "Blob" "arrayBuffer" "document"

// 自定义请求头
// setRequestHeader(name, value)
// getResponseHeader(name)
// getAllResponseHeaders()
const resHeader = xhr
  .getAllResponseHeaders()
  .split('\r\n')
  .reduce((result, current) => {
    let [key, value] = current.split(':');
    result[key] = value;
    return result;
  }, {});
console.log('resHeader', resHeader);

// POST formData
