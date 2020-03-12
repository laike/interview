// import untils from './src/until1'

// import { f1, f2 } from './src/until2'
// require("@babel/polyfill");
// f1();
// f2();

// console.log([1, 2, 3].map(item => item + 1))

//这里我们es5来实现Array.flat()这个扁平化函数
function flattern(arr = []) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flattern(cur) : cur)
    }, [])
}
// console.log(flattern([1, 2, 3, [2, 3, 4, [10, 11, 12]],
//         [7, 8, 9]
//     ]))
//import factory from './src/jquery'
// import load from './src/interview'
// import load from './src/vdom'
// import al1 from './src/algorithm-1'
import mvvm from './src/mvvm'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
const render = module.hot ? ReactDOM.render : ReactDOM.hydrate
render(<App /> , document.getElementById('root'));   