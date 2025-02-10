// loadScript函数
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(script);
    };
    script.onerror = () => {
      alert('load script error, ', src);
    };
    document.head.append(script);
  });
}

// 本次示例中依次加载三个.js
loadScript('./one.js')
  .then((result) => {
    console.log('load one success');
    return loadScript('./two.js');
  })
  .then((result) => {
    console.log('load two success');
    return loadScript('./three.js');
  })
  .then((result) => {
    alert('load all');
    one();
    two();
    three();
  });
