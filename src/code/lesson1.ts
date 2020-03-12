import { cloneElement } from "react";

//全部采用typescript来编写

/***
 * 
 * 知识点：
 * String.prototype.split
 * String.prototype.match
 * Array.prototype.map
 * Array.prototype.reverse
 * Array.prototype.join
 * 思维：
 * 要熟悉所有的API，知道在某些场景下的实际应用
 */

//输入: "Let's take LeetCode contest"
//输出: "s'teL ekat edoCteeL tsetnoc"
export function reverseStr(str=''):string {
   return str.split(' ').map(s=>{
       //对单词内部的文字进行反转
       return s.split('').reverse().join('')
   }).join(' ')
}
export function reverseStr1(str=''):string {
    let matches = str.match(/[\w']+/g);
    return matches ? matches.map(s=>{
        //对单词内部的文字进行反转
        return s.split('').reverse().join('')
    }).join(' ') : ''
 }

 
 export function reverseStr2(str=''):string {
    return str.split(/\s/g).map(s=>{
        //对单词内部的文字进行反转
        return s.split('').reverse().join('')
    }).join(' ')
 }

 //种花问题
 export   function canPlaceFlowers(flowerbed:number[]=[], n:number):boolean {
    //最大数
    let max = 0;
    for (let i = 0,len = flowerbed.length-1;i < len; i++) {
        if(flowerbed[i] === 0){
            if(i===0 && flowerbed[1] === 0){
                max++
                i++
            }else if(flowerbed[i-1] === 0 && flowerbed[i+1]===0){
                max++
                i++
            }
        }
        
    }
    return max >= n;
};

//格雷编码
export function grayCode(n:number){

    let make =(num:number):string[]=>{
        let result:string[] = [];
        let prev:string[] = make(n-1);
        let max =Math.pow(2,n)-1;
        for(let i=0,len=prev.length;i++;){
            result[i] = `0${prev[i]}`;
            result[max-i] = `1${prev[i]}`
        }
        return result;
    }

    return make(n)
}

//电话号码的字母组合
export function letterCombinations(digits:string) {
    //第一步进行拆分成数组
    let num = digits.split('');
    //定义一个映射数组
    let map = ['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let code:any[] = [];
    num.forEach((item)=>{
        if(map[Number(item)]){
           code.push(map[Number(item)])
        }
    })
    //进行代码逻辑
    let comb = (arr:any[])=>{
        //临时变量用来保存前两个组合的结果
        let tmp = [];
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)          
            }
        }
        arr.splice(0,2,tmp);
        if(arr.length > 1){
            comb(arr)
        }else{
            return tmp;
        }
    }
    return comb(code);

}
//卡牌分组
export function hasGroupsSizeX(deck:any[]) {
    
}