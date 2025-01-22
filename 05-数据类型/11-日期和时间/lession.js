// 内建对象Date,提供了日期时间的管理方法
// 创建
let now = new Date();
console.log(now);

// 毫秒的参数表示1970/1/1之后经过的毫秒数
let date1 = new Date(1000 * 60 * 60 * 24);
console.log(date1)

// 如果是个字符串将被自动解析，与Date.parse的算法相同
let date2 = new Date('2024-03-12')
let date3 = new Date('2023/03/14')
console.log(date3)
console.log(date2)

//设置年月日秒来获取,只有年月是必填的参数，月份从0开始
let date4 = new Date(2011, 3, 4, 10,);
console.log(date4)

// 访问日期组件，基于当地时区
console.log(date4.getFullYear())
console.log(date4.getMonth() + 1) // 从0-11
console.log(date4.getHours())
// 基于UTC+0
console.log(date4.getUTCHours())
console.log(date4.getTimezoneOffset()) //分钟为单位

// 设置日期组件
date4.setHours(12);
console.log(date4)
