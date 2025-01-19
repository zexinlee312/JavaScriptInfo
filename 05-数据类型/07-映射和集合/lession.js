// Map带键的数据项集合，和对象最大的区别在于键可以是任意类型
// new Map()  map.set(key,value)  map.get(key)  map.has(key)  map.delete(key)  map.clear()  map.size
let map = new Map();
map.set(1, 'num1');
map.set('1', 'str1');
map.set(true, 'bool1');
console.log(map.get(1));
console.log(map.get('1'))
console.log(map.size);
// map[key]不是正确打开方式
// 使用对象作为键
let john = { name: 'John'};
let map2 = new Map();
map2.set(john, 1);
console.log(map2.get(john));

// map比较键和===差不多，但NaN===NaN
// Map迭代
// map.keys() map.values() map.entries()
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 250],
    ['onion', 100]
]);
for (let key of recipeMap.keys()) {
    console.log(key);
}

for (let value of recipeMap.values()) {
    console.log(value)
}

for (let entry of recipeMap.entries()) {
    console.log(entry[0], ": ", entry[1]);
}

// Object.entries 从对象创建Map
let obj = {
    name: 'John',
    age: 5,
}
let map3 = new Map(Object.entries(obj));
console.log(map3.get('name'));
// Object.fromEntries 从Map创建对象
let prices = Object.fromEntries([
    ['cucumber', 500],
    ['tomatoes', 250],
    ['onion', 100]
])
console.log(prices.onion);

// Set 值不重复
// new Set(iterable) 创建set提供一个iterable，从中复制值到set中
// set.add(value)  set.delete(value)  set.has(value)  set.clear() set.size
let set = new Set();
// let john = { name: 'John'};
let peter = { name: 'Peter'};
let mary = { name: 'Mary'};
let Tim = { name: 'Tim'};
set.add(peter)
set.add(mary);
set.add(Tim);
set.add(peter)
console.log(set.size)
for (let user of set) {
    console.log(user)
}
// 为了兼容Map存在一下方法
for (let key of set.keys()) {
    console.log(key)
}
for (let value of set.values()) {
    console.log(value)
}
for (let entry of set.entries()) {
    console.log(entry[0], ": ", entry[1]);
}