// 可迭代对象是数组的泛化，可被定制为可在for...of循环中使用的对象，如数组/字符串
let range = {
    from: 1,
    to: 5
};
// 为了让range可迭代，需要添加名为Symbol.iterator的方法
range[Symbol.iterator] = function () {
    // 返回一个迭代器，有next方法的对象
    return {
        current: this.from,
        last: this.to,
        // 返回的结果的格式必须是{done:boolean, value:any}
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true}
            }
        }
    }
}

for (let num of range) {
    console.log(num);
}

// 显示调用迭代器
let iterator = range[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) {
        break;
    }
    console.log(result.value);
}

// 可迭代：实现了Symbol.iterator的对象；类数组：有索引和length的对象
let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2,
}

// Array.from 从上述两种对象中获取一个真正的数组
let arr = Array.from(arrayLike);
console.log(arr);

let rangeArr = Array.from(range);
console.log(rangeArr)