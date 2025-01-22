// 数组结构
let arr = ['John', 'Doe'];
let [firstName, secondName] = arr;
console.log(firstName);
console.log(secondName);

// 解构不意味着破坏
console.log(arr)

// 通过逗号忽略元素，例如忽略第二个元素
let [name, , title] = ['a', 'b', 'c'];
console.log(title)

// 右侧可以是任何可迭代对象、
let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

// 与.entries()方法进行循环操作
let user = {
    name: 'John',
    age: 30,
}
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

// 其余的...
let [name1, name2, ...rest] = ['a', 'b', 'c', 'd'];
console.log(rest)

// 默认值
let [hello = 'Hello', world = 'World'] = [undefined,'HELLO']
console.log(hello)
console.log(world)