// splice，功能强大可用于增删
let arr1 = ['i', 'go', 'home'];
arr1.splice(1, 1);
console.log(arr1);

let arr2 = ["I", "study", "JavaScript", "right", "now"];
let remove2 = arr2.splice(0, 3, "go", 'home')
console.log(arr2);
console.log(remove2);
arr2.splice(1, 0, 'your');
console.log(arr2);

// slice 复制多一个数组
let arr3 = ['t', 'e', 's', 't'];
console.log(arr3.slice(1, 2))
console.log(arr3.slice(-2, 4));
console.log(arr3)

// concat
let arr4 = arr3.concat(arr2)
console.log(arr4)

// forEach
let arr5 = ['Spring', 'Summer', 'Winter'];
arr5.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`)
});

// indexOf/includes, ===严格相等
let arr6 = [1, 0, false];
console.log(arr6.indexOf(false));
console.log(arr6.includes(null));

// find/findIndex/findLastIndex, 返回满足条件的第一个
let arr7 = [
    {id: 1, name: 'John', age: 1},
    {id: 2, name: 'Joe', age: 2},
    {id: 3, name: 'Son', age: 3},
]
let user = arr7.find(item => {
    return item.id === 1;
});
console.log(user);

// filter返回所有满足条件的
let userList = arr7.filter(item => item.age > 1);
console.log(userList);

console.log("====================================转换数组==============================")
// map
let arr8 = arr7.map(user => {
    user.age++;
    return user;
});
console.log(arr8);

// sort
let arr9 = [1, 15, 2];
arr9.sort((a, b) => {
    return a - b;
});
console.log(arr9);

// reverse
console.log(arr9.reverse());

// split/join
let str = 'past,now,future';
let arr10 = str.split(',');
console.log(arr10);
let result = arr10.join(";");
console.log(result);

// reduce [...].reduce(function(accumulator, current, index, array){}, initial);
let acc = [1,2,3,4,5,6].reduce(function (acc, item) { return acc + item; }, 10);
console.log(acc);

// some的用法，表示至少一个元素通过了提供的函数测试  every则表示每个都通过
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));