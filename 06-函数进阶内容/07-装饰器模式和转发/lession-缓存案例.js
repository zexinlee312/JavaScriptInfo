function slow(x) {
  console.log(`called with ${x}`);
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  }
}

slow = cachingDecorator(slow);
slow(1);
slow(1)