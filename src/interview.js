//面试的相关代码演示
// 1.用js写一个随机生成指定字符串的方法。

function randomStrOne(n = 5) {
    let tpl = 'abcdefghijklmnopqrstuvwxyz0123456789',
        res = '',
        i;
    for (i = 0; i < n; i++) {
        res += tpl.charAt(Math.round(Math.random() * tpl.length));
    }
    return res;

}

function randomStrTwo(n = 5) {
    let tpl = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let arr = Array.from({ length: n }, () => tpl.charAt(Math.round(Math.random() * tpl.length)));
    return arr.join('')
}

//console.log(randomStrTwo(10))

//2.用至少3种方式实现数组去重。
//第一种方法 使用es6
function distinct1(arr = []) {
    return Array.from(new Set(arr))
}
//第二种使用双重for循环 这个我没有怎么理解？...尴尬啊没想通

function distinct2(arr = []) {
    let len = arr.length,
        res = [];
    for (let i = 0; i < len; i++) {
        console.log(`i:${i} val:${arr[i]}`)
        for (let j = i + 1; j < len; j++) {
            console.log(`  j:${j} val:${arr[j]}`)
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        res.push(arr[i])
    }
    return res;
}
//第三中利用indexOf和forEach循环去重
function distinct3(arr = []) {
    let res = [];
    arr.forEach((v, i, array) => {
        console.log(i, v)
        array.indexOf(v, i + 1) === -1 && res.push(v)
    })
    return res;
}

function distinct4(arr = []) {

    return arr.filter((v, i, array) => array.indexOf(v, i + 1) === -1)
}
//console.log(distinct4([1, 1, 24, 46, 3463, 21, 1, 45, 67, 24, 46, 20, 21]))

//实现深拷贝和浅拷贝

function deepCopy(target) {

    let copyed_objs = [];
    console.log(copyed_objs);

    function _deepCopy(target) {
        //首先判断是否是对象 数组和对象都会返回'object'
        if (typeof target !== 'object' || !target) {
            return target
        }

        //首先在拷贝去查看是否有同样的引用有的话就不用递归获取
        for (let i = 0; i < copyed_objs.length; i++) {
            if (copyed_objs[i].target === target) {
                //直接返回引用
                return copyed_objs[i].copyTarget;
            }
        }
        let obj = Array.isArray(target) ? [] : {};
        //拷贝到引用
        copyed_objs.push({
            target,
            copyTarget: obj
        })
        Object.keys(target).forEach(key => {
            if (obj[key]) {
                return;
            }
            obj[key] = _deepCopy(target[key])
        })
        return obj;


    }

    return _deepCopy(target)

}

var a = {
    arr: [1, 2, 3, { key: '123' }], //数组测试
};
a.self = a; //循环引用测试
a.common1 = { name: 'ccc' };
a.common2 = a.common1; //相同引用测试
var c = deepCopy(a);
c.common1.name = 'changed';
console.log(c);

var d = deepCopy({ a: 1, b: 2 });
console.log(d);