# CSS盒模型

## 知识点
1. 基本概念：标准模型+IE模型
   margin + border + padding + content

2. 区别
   内容宽高不一样 标准模型只计算content

3. css如何设置
   box-sizing: content-box|border-box;

4. js如何获取盒模型对应的宽高
   dom.style.width/height(内联)

   document.currentStyle.width/height(只有IE支持)

   window.getComputedStyle(dom).width/height

   dom.getBoundingClientRect().width/height

5. 边距重叠
   BFC(块级格式化上下文)
   BFC的原理：
    内部的Box会在垂直方向，一个接一个地放置。
    Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
    每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
    BFC的区域不会与float box重叠。
    BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
    计算BFC的高度时，浮动元素也参与计算
   如何创建BFC：
    1. float值不为none
    2. position的值不为static/relative
    3. display为table、inline-block
    3. overflow为hidden、auto
