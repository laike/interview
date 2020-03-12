$('p').click(function() {
    // setTimeout(function() {
    //     console.log(this)
    //     $(this).css('background-color', 'blue')
    // }, 1000)
    //或者使用 _this 来进行保存
    setTimeout($.proxy(function() {
        $(this).css('background-color', 'blue')
    }, this), 1000)

})

//使用es6 明星经纪人的演示
let star = {
    name: '杨幂',
    age: 22,
    phone: 1235480724
}

let agent = new Proxy(star, {
    get: function(target, key) {
        if (key === 'phone') {
            return 16823548; //经纪人电话，不可能把明星电话给你
        }
        if (key === 'price') {
            return 120000; //明星不报价，经纪人报价
        }
        return target[key]
    },
    set: function(target, key, val) {
        if (key === 'customPrice') {
            if (val < 120000) {
                throw new Error('价格太低')
            } else {
                target[key] = val;
                return true;
            }
        }
        target[key] = val;
    }
})

agent.customPrice = 150000
console.log(agent.customPrice)

/**
 * 
 * 代理模式VS装饰器模式（装饰器模式：拓展功能，原有功能不变且可以直接使用，代理模式：显示原有功能，但是经过限制
 * 或者阉割之后）
 * 代理模式VS适配器模式（适配器模式：提供一个不同的接口（如不同版本的插头）
 * 代理模式：提供同一个接口
 * ）
 */