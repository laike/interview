//这里使用typescript来进行学习和演示代码相关
interface labeledValue{
    label:string;
}

function printLabel(labeledObj:labeledValue){
    console.log(labeledObj.label)
}

let myObj = {size:10,label:"size 10 object"}
printLabel(myObj)


class Animal{
    private name:string ='';
    static instance:any=null;
    constructor(name:string){
        this.name  = name;
    }
    say(){}
}
//这个就是单例模式
class Single{
    static instance:any = null;
    static  getInstance(){
        if(Single.instance instanceof Single){
            return Single.instance
        }else{
            Single.instance = new Single()
            return Single.instance
        }
    }
}

console.log(Single.getInstance() === Single.getInstance() )