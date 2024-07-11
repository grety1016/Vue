export{}
//数字类型
let num1:number =0;
//字符串类型
let str:string = "Hello World";
//布尔类型
let flag:boolean;
flag = false;
//进制数字
let a:number  = 10;
let a1:number = 0b10;
let a2:number = 0o73434;
let a3:number = 0x156af; 

// null undefined
let u:undefined = undefined;
let n:null = null;
//undefined null 为所有类型的子类型，可以直接赋值给其它类型
let num2:number = u;
let num3:number = n;

const num4:number = 10;

//数组array
let arr1:number[] =[1,2,3];

//泛型数组
let arr2:Array<number> = [1,2,3,4,5];

//对象object非原始类型
let obj:object ={};
obj = null;
obj = undefined;
obj = [];
obj = new String('123');
obj = String;

//Any类型
let anyValue:any[]=[100,2,4,"123",true];
//console.log(anyValue[0].split());//此语句在类型检查时可以通过，但是运行时会报错，因为TypeError: anyValue[0].split is not a function，这是因为对象是any类型，这也是any方便使用的同时也存在的缺点


//类型推断
let grety = 'SuNingLv';
//grety = 10;  //类型推断后，后续赋值只能跟首次赋值的类型一致

//复合类型
let numStr:number | string = 0;
numStr = "SuNingLv";

//接口对象类型：它是行为的抽象
interface IPerson{
    name:string;
    age:number;
    readonly sex:string;
    parent?:string;
    [propName:string]:any;
}

let p:IPerson={
    name:"SuNingLv",
    age:20,
    sex:"Man",
    head:"toll"
};
console.log(p);
p.name = "Grety";
p.age = 33;
p.parent = "father";
p.head = "fall";
console.log(p);
//p.sex = 'woman' //只读属性无法在初始化后再次赋值

//接口数组类型一般不常用，需要用到再查询资料！！！

//接口函数类型
interface ISerchFunc{
    (a:string, b:string):boolean;
}

const fun1:ISerchFunc =function fun1(a:string, b:string):boolean {
    return  a.search(b)!== -1;
}

console.log(fun1('123','1'));

//函数定义
function add(a:number,b:number):number {
    return a+b;
}

let c = add(1,3);
console.log(c);

//函数表达式\匿名函数
let add2 = function(a:number,b:number):number {return a+b;};

console.log(add2(2,3));

//函数完整的写法
let add3:(a:number, b:number) => number = function(a:number, b:number):number {
    return a+b;
}

console.log(add3(3,3));

//函数的可选参数和默认参数

let getNmae =  function(a:string='NingLv',b?:string,c:string='Grety') {
    return a+b+c;
}

console.log(getNmae());

//函数剩余参数,剩余参数只能放在所有的参数末尾

function getSum(...args:number[]):number {
    let sum:number = 0;
    for(let i=0;i<args.length;i++){
        sum += args[i];
    }
    return sum;
}
console.log(getSum(1,2,3,4,5,6));

//函数的重载

function getSum2(a:number,b:number):number;
function getSum2(a:string,b:string):string;
function getSum2(a:any,b:any):any {
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a+b;
    }else{
        throw new Error('参数类型不匹配');
    }
};

console.log(getSum2(1,2));
console.log(getSum2('a','b'));

//类型断言
//①变量 as 类型 ②<类型>变量

let strAny: any = 'Hello World';
let str2: string = strAny as string; //方法一

let objAny: any = {name:'NingLv',age:20};
let obj2: IPerson = <IPerson>objAny ; //方法二

//将任何一个类型断言为 any,通常不能随意使用any
//(window as any).foo = 1;

//将any断言为具体类型
function abc(x:any,y:any):any {
    return x+y;
}

let re = abc(1,2) as number;
console.log(re);

//进阶
//类型别名
type s = string;
let str11:s = "grety";

//all代表多种复合类型
type all = string | number | boolean | null | undefined ;
let allValues:all = "Grety";
allValues = 100;
allValues = true;
allValues = null;

//字符串字面量类型
type stringType = 'su' | 'huang';//只能赋值给定的字符面量值
let names:stringType = 'huang';




