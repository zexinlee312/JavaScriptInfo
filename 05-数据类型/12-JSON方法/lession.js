// JSON.stringify: 将对象转换为JSON
// JSON.parse: 将JSON转换回对象
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'javascript'],
}

let json = JSON.stringify(student)
console.log(json)
console.log(typeof json)

let numbers = "[1,2,3,4]";
let numberObj = JSON.parse(numbers);
console.log(typeof numberObj)
console.log(numberObj)