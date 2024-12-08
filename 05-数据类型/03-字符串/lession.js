// 引号
let str1 = 'Hello'
let str2 = "Hello"
let str3 = `Hello`
console.log(str1, " ", str2, " ", str3)

// 模板字符串可以跨行
let str4 = `Hello
World
Hi
World`
console.log(str4)

// 特殊字符
// \n \t \r \\ \' \" \xXX \uXXXX \u{XXXX}
console.log("Lebron\nJames")
console.log("Lebron\tJames")

// 字符串长度,特殊字符算一个字符
let str5 = "Lebron\nJames";
console.log(str5.length);

// 访问字符
console.log(str5.charAt(5));
console.log(str5[5])
console.log('20',str5.charAt(20));
console.log('20',str5[20])

// 字符串不可变
// let str5[3] = 'H' //报错

// 查找字符串
if (str5.indexOf('James') !== -1) {
  console.log('exist')
}

// 获取子字符串
// str.slice(start, [, end])
let str6 = str5.slice(2,4);
// str.substring(start, [, end])
let str7 = str5.slice(2,4);
// str.substr(start, length)
let str8 = str5.substr(2,4)
console.log(str7)
console.log(str8)
console.log(str6)