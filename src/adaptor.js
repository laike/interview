class Duck {
    fly() {

    }
    quack() {

    }
}

class Turkey {

    fly() {

    }
    gobble() {

    }
}

class MallardDuck extends Duck {
    fly() {
        console.log('可以飞很长的距离！')
    }
    quack() {
        console.log('嘎嘎嘎！')
    }
}

class WildTurkey extends Turkey {
    fly() {
        console.log('飞翔的距离貌似有点儿短！')
    }
    gobble() {
        console.log('洛洛！洛洛！')
    }

}
class TurkeyAdapter extends Duck {
    constructor(oTurkey) {
        super()
        this.oTurkey = oTurkey;
    }
    quack() {
        this.oTurkey.gobble();
    }
    fly() {
        let nFly = 0;
        let nLenFly = 5;
        for (let i = 0; i < nLenFly; i++) {
            this.oTurkey.fly();
            nFly = nFly + 1;
        }
    }
}
//测试代码
let oMallardDuck = new MallardDuck();
let oWildTurkey = new WildTurkey();
let oTurkeyAdapter = new TurkeyAdapter(oWildTurkey);

//原有的鸭子行为
oMallardDuck.fly();
oMallardDuck.quack();

//原有的火鸡行为
oWildTurkey.fly();
oWildTurkey.gobble();

//适配器火鸡的行为（火鸡调用鸭子的方法名称）
oTurkeyAdapter.fly();
oTurkeyAdapter.quack();
//封装旧的接口
//现在的代码
// ajax({

// }).done()

//以前的代码全是
//$.ajax()