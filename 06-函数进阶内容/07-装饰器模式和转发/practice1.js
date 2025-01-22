function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  function count(...args) {
    count.calls.push(args);
    func.call(this, ...args);
  }
  count.calls = [];
  return count;
}

work = spy(work);
work(1, 2);
for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}