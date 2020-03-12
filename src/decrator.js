class Circle {
    constructor() {

    }
    draw() {
        console.log('画一个圆形')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw();
        this.setRedBorder()
    }
    setRedBorder(circle) {
        console.log('设置红色边框')
    }
}

// let circle = new Circle()
// circle.draw()
// let dec = new Decorator() 
// dec.draw()

//装饰器的使用场景 ES7之中的装饰器 已经是标准了。装饰器装饰类装饰方法

@testDec
class Demo {

}

function testDec(target) {
    target.isDec = true;
}

//alert(Demo.isDec)

function mixins(...list) {
    return function(target) {
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo() {
        alert('foo')
    }
}
@mixins(Foo, { a: 1 })
class MyClass {

}
let obj = new MyClass();
//console.log(obj.a)

class Person {
    constructor(name) {
        this.name = name;
    }

    @readonly
    say() {
        return `my name is ${this.name}`
    }

    @log
    add(a, b) {
        return a + b;
    }
    @deprecate('这个方法我们已经弃用了详情查看：', { url: 'http://laijiadayuan.com/blog/a.html' })
    ui() {

    }
}

// function readonly(target, name, descriptor) {
//     descriptor.writeable = false;
//     return descriptor
// }

function log(target, name, descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function() {
        console.log(`Calling ${name} with `, arguments)
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

let p = new Person('laike');
console.log(p.add(1, 2))
p.ui()

//这个时候我们需要使用core-decorators 这个是第三方的类库


import { readonly, deprecate } from 'core-decorators'