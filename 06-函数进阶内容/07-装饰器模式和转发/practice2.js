function f(x) {
  console.log(x);
}

function delay(f, time) {
  return function() {
    setTimeout(() => {
      f.apply(this, arguments);
    }, time)
  }
}

let f2000 = delay(f, 2000);
f2000('test')