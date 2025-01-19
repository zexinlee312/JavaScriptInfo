// setTimeout(func|code, [delay], [arg1], [arg2], ...)
let timer1 = setTimeout((firstName, secondName) => {
  console.log(`${firstName} ${secondName}`);
}, 3000, 'Li', 'xin')

// clearTimeout 取消调度
clearTimeout(timer1);

// setInterval
let timer2 = setInterval((content) => {
  console.log(`${content}`);
}, 1000, 'Hello');

setTimeout(() => {
  clearInterval(timer2)
}, 5000)