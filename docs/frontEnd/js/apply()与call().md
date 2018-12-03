# apply()与call()的区别

## 语法
```js
/*apply()方法*/
function.apply(thisObj[, argArray])

/*call()方法*/
function.call(thisObj[, arg1[, arg2[, [,...argN]]]]);
```

## 定义

apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。

call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。

## 共同之处

两个方法都是在特定的作用域中调用函数，等于设置函数内this对象的值，以扩充函数赖以运行的作用域,将一个函数的对象上下文从初始的上下文改变为由thisObj指定的新对象

## 栗子

1. 基本用法
```js
function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
var a1 = add.apply(sub,[4,2]);　　//sub调用add的方法
var a2 = sub.apply(add,[4,2]);
alert(a1);  //6
alert(a2);  //2


/*call的用法*/
var a1 = add.call(sub,4,2);
```

2. Math.max 可以实现得到数组中最大的一项：

因为Math.max不支持Math.max([param1,param2])也就是数组，但是它支持Math.max(param1,param2...)，所以可以根据apply的特点来解决 var max=Math.max.apply(null,array)，这样就轻易的可以得到一个数组中的最大项（apply会将一个数组转换为一个参数接一个参数的方式传递给方法）

这块在调用的时候第一个参数给了null，这是因为没有对象去调用这个方法，我只需要用这个方法帮我运算，得到返回的结果就行，所以直接传递了一个null过去。

用这种方法也可以实现得到数组中的最小项：Math.min.apply(null,array)

3. Array.prototype.push可以实现两个数组的合并

同样push方法没有提供push一个数组，但是它提供了push(param1,param2...paramN)，同样也可以用apply来转换一下这个数组，即：

```js
var arr1=new Array("1","2","3");
var arr2=new Array("4","5","6");
Array.prototype.push.apply(arr1,arr2);    //得到合并后数组的长度，因为push就是返回一个数组的长度
```