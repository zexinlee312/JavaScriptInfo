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
loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js'
).then(
  (result) => alert('load successfully'),
  (reject) => alert('load failed')
);
