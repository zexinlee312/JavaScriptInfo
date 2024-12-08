// toString(base)
let number = 256
console.log(number.toString(2))
console.log(number.toString(8))
console.log(number.toString())

// 舍入
// Math.floor  Math.ceil  Math.trunc  Math.round
let pi = 3.14
console.log(Math.floor(pi))
console.log(Math.ceil(pi))
console.log(Math.round(pi))
console.log(Math.trunc(pi))

// number.toFixed
console.log(3.14159.toFixed(3))

// isFinite  isNaN
console.log(isFinite('15'))
console.log(isFinite(NaN))

console.log(isNaN(NaN))
console.log(NaN === NaN)

// parseInt parseFloat 会读取知道不能读为止
console.log(parseInt('100px'))
console.log(parseFloat('12.1.3'))

// Math.random
console.log(Math.random())
