/**
 * Created by dllo on 2017/4/21.
 */
const util = require('util');


//这个看不懂
// 如果运行时没带上环境变量集合，则不会打印任何东西。
const debuglog = util.debuglog('path');
console.log(debuglog('path', 123));//打印出来的都是undefind


// util.deprecate() 方法会包装给定的 function 或类，并标记为废弃的
var f = function () {
    console.log('这是个 function.');
};
var df = util.deprecate(function () {
    console.log('这是个被废弃 function.');
}, '废弃的function');

f();
df();


// util.format() 方法返回一个格式化后的字符串，使用第一个参数作为一个类似 printf 的格式。
//返回f:%s

console.log(util.format('%s:%s', 'f'));
//util.inherits(constructor, superConstructor)\
// 从一个构造函数中继承原型方法到另一个。
// constructor 的原型会被设置到一个从 superConstructor 创建的新对象上。
const EventEmitter = require('events');

class MyStream extends EventEmitter {
    constructor() {
        super();
    }
    write(data) {
        this.emit('data', data);
    }
}

const stream = new MyStream();

stream.on('data', (data) => {
    console.log(`接收的数据："${data}"`);
});
stream.write('使用 ES6');


//util.inspect() 方法返回 object 的字符串表示，主要用于调试。
// 附加的 options 可用于改变格式化字符串的某些方面。
console.log(util.inspect(util));//后面还能填参数,只填了util,就查看util对象的所有属性


//util.inspect.defaultOptions
const arr = Array(2);

console.log(arr); // 打印截断的数组
util.inspect.defaultOptions.length = null;
console.log(arr); // 打印完整的数组
// [ ,  ]
// [ ,  ]


//一个符号，可被用于声明自定义的查看函数
console.log(util.inspect.custom);//打印出来Symbol(util.inspect.custom)






