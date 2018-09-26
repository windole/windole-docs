# DOM事件类

## DOM事件的级别

|事件级别 | 语法 |
|DOM0    | element.onclick = function() {} |
|DOM2    | element.addEventListener('click', function (e) {}, false) |
|DOM3    | element.addEventListener('keyup', function (e) {}, false) |

## DOM事件模型

1. 捕获
window-> document -> html -> body -> ... ->目标元素
2. 冒泡

## DOM事件类


## 描述DOM事件捕获的具体流程


## Event对象的常见应用

|event.preventDefault()  | 通知浏览器不要执行与事件关联的默认动作。|
|event.stopPropagation() | 不再派发事件。                        |
|event.currentTarget     | 返回其事件监听器触发该事件的元素。     |
|event.target            | 返回触发此事件的元素（事件的目标节点）。|
|event.type              | 返回当前 Event 对象表示的事件的名称。  |


## 自定义事件

```js
var eve = new Event('test');
ev.addEventListener('test', function () {
    console.log('test dispatch');
});
setTimeout(function () {
    ev.dispatchEvent(eve);
}, 1000);
```