class Product {
    constructor(name) {
        this.name = name;
        console.log(this.name)
    }
    init() {

    }
    f1() {

    }
    f2() {}
}


class Creator {
    constructor() {

    }
    static build(name) {
        return new Product(name);
    }
    create(name) {
        return new Product(name)
    }
}

var c = new Creator();
var p = c.create('name');

//jquery factor mode

class jQuery {
    constructor(selector) {
        const slice = Array.prototype.slice;
        let dom = slice.call(document.querySelector(selector));
        let len = dom ? dom.length : 0;
        let i;
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len;
        this.selector = selector;

    }
    static fn() {

    }
    css() {

    }
    html() {

    }
    append() {

    }
    before() {

    }

}

window.$ = (selector) => {
    return new jQuery(selector)
}

//React.createElement 就是使用的工厂模式