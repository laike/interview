/**
 * js 之前是没有块级作用域的，es6中就有了，
 * 
 */

//1. let /const
//es5
var a = 10;
var b = 20;

//es 6

let c = 10;

const d = 10;
d = 11; //报错 const定义的常量不能重新赋值


//2. 多行字符串/模板变量
//es5
var html = '';
html += '<div>'
html += '<input type="checkbox"/>'
html += '</div>'

//es6
var div = `<div><input type="checkbox"  /> ${a}</div>`

//3.解构赋值
//es5
var obj = { a: 100, b: 200 };
var h = obj.a
var i = obj.b;
//es6
const { x, y } = obj;
let arr = ['x', 'y', 'z'];
let { q, s, t } = arr;
//4.块级作用域
//es 5
var o = { a: 100, b: 200 }
for (var item in o) {

}
console.log(item); //b

//es6
for (let val in o) {

}
console.log(val); //undefined
//5.函数默认参数
//es5
function demo(name) {
    if (!name) {
        name = 'test'
    }
}

//es6
function demo1(name = 'test') {

}

//6.箭头函数（this 指向它的上级作用域）
function fn() {
    console.log('real', this) //{a:100}
    var arr = [1, 2, 3];
    arr.map(function(item) {
        console.log('es5', this); //window
        return item + 1;
    })
    arr.map(item => {
        console.log('es6', this); //{a:100}
        return item + 1;
    })
}

fn.call({ a: 100 })