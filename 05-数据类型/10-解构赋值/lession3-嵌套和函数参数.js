// // 嵌套解构
// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };
//
// // 为了清晰起见，解构赋值语句被写成多行的形式
// let {
//     size: { // 把 size 赋值到这里
//         width,
//         height
//     },
//     items: [item1, item2], // 把 items 赋值到这里
//     title = "Menu" // 在对象中不存在（使用默认值）
// } = options;

// 智能函数参数，某些场景只用默认参数即可
function showMenu1(title = "Untitled", width = 200, height = 100, items = []) {
    console.log(title);
}
showMenu1('a', undefined, undefined, ['a', 'b']);
// 上面这种情况要传入很多undefined，影响可读性

function showMenu2({title = "Untitled", width = 200, height = 100, items = []}) {
    console.log(title);
}
showMenu2({items: ['a', 'b']})