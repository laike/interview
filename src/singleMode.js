class Single {
    constructor() {
        this.state = 'hide'
    }
    login() {
        console.log('login...')
    }
    show() {}
    hide() {}
}

//Single可以改成LoginForm
Single.getInstance = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new Single()
        }
        return instance;
    }
})()


let instance = Single.getInstance()
instance.login()

//jQuery只有一个$就是单例模式
// 模拟一个登录框
//购物车(和登录类似)
//vuex 和redux 中的store