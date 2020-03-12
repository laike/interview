(function() {
    //使用jquery的方式来生成table
    let data = [
        { name: '张三', age: 20, address: '北京' },
        { name: '李四', age: 40, address: '上海' },
        { name: '王五', age: 55, address: '广州' },
    ]

    function render() {
        let container = $('#container');
        container.html('');
        let table = $('<table>')
        let th = table.append($('<tr><th>name</th><th>age</th><th>address</th></tr>'));
        for (let i = 0; i < data.length; i++) {
            let td = $(`<tr><td>${data[i].name}</td><td>${data[i].age}</td><td>${data[i].address}</td></tr>`)
            table.append(td)
        }
        container.append(table)

    }

    // render() 
})()


import { h, init } from 'snabbdom'
let data = [
    { name: '张三', age: 20, address: '北京' },
    { name: '李四', age: 40, address: '上海' },
    { name: '王五', age: 55, address: '广州' },
]
let container = document.getElementById('container');
var patch = init([ // Init patch function with chosen modules
    import ('snabbdom/modules/class'), // makes it easy to toggle classes
    import ('snabbdom/modules/props'), // for setting properties on DOM elements
    import ('snabbdom/modules/style'), // handles styling on elements with support for animations
    import ('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
let p = document.querySelector('p')
let vnode;

function render() {
    let newVnode = h('table', {}, data.map(item => {
        let tds = [],
            i;
        for (i in item) {
            if (item.hasOwnProperty(i)) {
                tds.push(h('td', {}, item[i] + ''))
            }
        }
        return h('tr', {}, tds)
    }))
    if (vnode) {
        patch(vnode, newVnode)

    } else {
        patch(container, newVnode)
    }
    vnode = newVnode
}
p.addEventListener('click', function() {
    render()
})

let vdom = {
    tag: 'ul',
    attrs: { id: 'list' },
    children: [{
            tag: 'li',
            attrs: { className: 'item' },
            children: ['item 1']
        },
        {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['item 2']
        }
    ]
}

function createElement(vnode) {
    let tag = vnode.tag;
    let attrs = vnode.attrs || {};
    let children = vnode.children || [];
    if (!tag) {
        return null;
    }
    let elem = document.createElement(tag);
    let attrName
    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName, attrs[attrName])
        }
    }
    children.forEach(childVnode => {
        let child = createElement(childVnode);
        if (child) {
            elem.appendChild(child)
        }
    })
    return elem;
}

console.log(createElement(vdom))

function updateChildren(vnode, newVnode) {
    let children = vnode.children || []
    let newChildren = newVnode.children || []
    children.forEach((child, index) => {
        let newChild = newChildren[index]
        if (newChild === null) {
            return;
        }
        if (child.tag === newChild.tag) {
            updateChildren(child, newChild)
        } else {
            replaceChild(child, newChild)
        }
    })
}