# 布局

布局是个基本功，可以考察掌握HTML语义化的熟悉程度以及CSS深度

给个栗子：
    高度一定，左右各300px,中间自适应

1. 浮动

```html
<section class="layout float">
    <h1>三栏布局</h1>
    <article class="left-right-center">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center">
        <h2>浮动解决方案</h2>
        1.这是三栏布局的浮动解决方案；
        2.这是三栏布局的浮动解决方案；
        3.这是三栏布局的浮动解决方案；
        4.这是三栏布局的浮动解决方案；
        5.这是三栏布局的浮动解决方案；
        6.这是三栏布局的浮动解决方案；
    </div>
    </article>
</section>
```

```css
.layout.float .left{
    float:left;
    width:300px;
    background: red;
}
.layout.float .center{
    background: yellow;
}
.layout.float .right{
    float:right;
    width:300px;
    background: blue;
}
```

2. 绝对定位

3. flexbox
```html
<section class="layout flexbox">
    <h1>三栏布局</h1>
    <article class="left-center-right">
        <div class="left"></div>
        <div class="center">
            <h2>flexbox解决方案</h2>
            1.这是三栏布局的浮动解决方案；
            2.这是三栏布局的浮动解决方案；
            3.这是三栏布局的浮动解决方案；
            4.这是三栏布局的浮动解决方案；
            5.这是三栏布局的浮动解决方案；
            6.这是三栏布局的浮动解决方案；
        </div>
        <div class="right"></div>
    </article>
</section>
```

```css
.layout.flexbox .left-center-right{
    display: flex;
}
.layout.flexbox .left{
    width: 300px;
    background: red;
}
.layout.flexbox .center{
    flex:1;
    background: yellow;
}
.layout.flexbox .right{
    width: 300px;
    background: blue;
}
```

4. table-cell
```html
<section class="layout table">
    <h1>三栏布局</h1>
    <article class="left-center-right">
        <div class="left"></div>
        <div class="center">
            <h2>表格布局解决方案</h2>
            1.这是三栏布局的浮动解决方案；
            2.这是三栏布局的浮动解决方案；
            3.这是三栏布局的浮动解决方案；
            4.这是三栏布局的浮动解决方案；
            5.这是三栏布局的浮动解决方案；
            6.这是三栏布局的浮动解决方案；
        </div>
        <div class="right"></div>
    </article>
</section>
```

```css
.layout.table .left-center-right{
    width:100%;
    height: 100px;
    display: table;
}
.layout.table .left-center-right>div{
    display: table-cell;
}
.layout.table .left{
    width: 300px;
    background: red;
}
.layout.table .center{
    background: yellow;
}
.layout.table .right{
    width: 300px;
    background: blue;
}
```
5. grid布局
```html
<section class="layout grid">
    <h1>三栏布局</h1>
    <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
        <h2>网格布局解决方案</h2>
        1.这是三栏布局的浮动解决方案；
        2.这是三栏布局的浮动解决方案；
        3.这是三栏布局的浮动解决方案；
        4.这是三栏布局的浮动解决方案；
        5.这是三栏布局的浮动解决方案；
        6.这是三栏布局的浮动解决方案；
    </div>
    <div class="right"></div>
    </article>
</section>
```

```css
.layout.grid .left-center-right{
    width:100%;
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: 300px auto 300px;
}
```

6. 双飞翼
```html
<section class="layout">
    <h1>三栏布局</h1>
    <article class="left-center-right">
        <div class="left"></div>
        <div class="center">
            <div class='content'>
                <h2>双飞翼布局解决方案</h2>
                1.这是三栏布局的浮动解决方案；
                2.这是三栏布局的浮动解决方案；
                3.这是三栏布局的浮动解决方案；
                4.这是三栏布局的浮动解决方案；
                5.这是三栏布局的浮动解决方案；
                6.这是三栏布局的浮动解决方案；
            </div>
        </div>
        <div class="right"></div>
    </article>
</section>
```

```css
.left,.right{
    float: left;
    width: 300px;
}
.center{
    width: 100%;
}
.content{
    margin: 0 300px;
}
.left {
    margin-left: -100%;
}
.right{
    margin-left: -300px;
}
```



## 再来一点
1. 优缺点
2. 高度不固定
3. 兼容性

## 变通
1. 上下高度固定，中间自适应
2. 两栏：右宽度固定，左自适应

## 资料学习
[flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
[动手实现flex布局框架](https://segmentfault.com/a/1190000007167682)
[学习grid](https://cssgridgarden.com/#zh-cn)