// 键必须是对象
let weakMap = new WeakMap();
let obj = {}
weakMap.set(obj, 'ok');
// weakMap.set('test', 'opps');
console.log(weakMap);
obj = null; // obj在内存中被删除了

// 只有set get delete has方法

// 了解使用场景

// WeakSet()只能向其中添加对象
let weakSet = new WeakSet();
weakSet.push(obj);
