// 对比map.keys values entries
// Object普通对象也支持类似方法
// Object.keys  values  entries,例如
let user = {
    name: 'John',
    age: 30,
}
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))


// 善用以上方法转换对象