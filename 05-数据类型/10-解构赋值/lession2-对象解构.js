let options = {
    title: "Menu",
    width: 100,
    height: 200
};

//顺序并不重要
let {title, width, height} = options;
console.log(title);
console.log(width);
console.log(height);


// 如果我们想把width赋值给变量w，则
let {width: w} = options;
console.log(w);

// 默认值
let user = {
    gender: 'Male',
}
let {name = 'Tom', age = 20, gender} = user;
console.log(name)
console.log(age)
console.log(gender)

let {t, ...rest} = options
console.log(rest)