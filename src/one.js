import '@babel/polyfill';
import Two from './Two';
const test=(num)=>{
console.log("test函数哈哈"+num);
}
test(Two.y);
@isTestable(true)
class MyClass { }

function isTestable(value) {
return function decorator(target) {
target.isTestable = value;
}
}
const delay=new Promise(resolve=>console.log("new Promise()"));
function* helloWorldGenerator() {yield 'hello';
   yield 'world';
   return 'ending';
}
var hw = helloWorldGenerator();

