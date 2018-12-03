(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{171:function(a,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"apply-与call-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-与call-的区别","aria-hidden":"true"}},[a._v("#")]),a._v(" apply()与call()的区别")]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[a._v("/*apply()方法*/")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("function")]),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("thisObj"),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" argArray"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("/*call()方法*/")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("function")]),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("call")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("thisObj"),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" arg1"),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" arg2"),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token operator"}},[a._v("...")]),a._v("argN"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),s("p",[a._v("apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。")]),a._v(" "),s("p",[a._v("call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。")]),a._v(" "),s("h2",{attrs:{id:"共同之处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共同之处","aria-hidden":"true"}},[a._v("#")]),a._v(" 共同之处")]),a._v(" "),s("p",[a._v("两个方法都是在特定的作用域中调用函数，等于设置函数内this对象的值，以扩充函数赖以运行的作用域,将一个函数的对象上下文从初始的上下文改变为由thisObj指定的新对象")]),a._v(" "),s("h2",{attrs:{id:"栗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栗子","aria-hidden":"true"}},[a._v("#")]),a._v(" 栗子")]),a._v(" "),s("ol",[s("li",[a._v("基本用法")])]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("add")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("b"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a"),s("span",{attrs:{class:"token operator"}},[a._v("+")]),a._v("b"),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("sub")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("b"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a"),s("span",{attrs:{class:"token operator"}},[a._v("-")]),a._v("b"),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a1 "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" add"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sub"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token number"}},[a._v("4")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token number"}},[a._v("2")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("　　"),s("span",{attrs:{class:"token comment"}},[a._v("//sub调用add的方法")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a2 "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" sub"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("add"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token number"}},[a._v("4")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token number"}},[a._v("2")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a1"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{attrs:{class:"token comment"}},[a._v("//6")]),a._v("\n"),s("span",{attrs:{class:"token function"}},[a._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a2"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{attrs:{class:"token comment"}},[a._v("//2")]),a._v("\n\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("/*call的用法*/")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a1 "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" add"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("call")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sub"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token number"}},[a._v("4")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token number"}},[a._v("2")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("Math.max 可以实现得到数组中最大的一项：")])]),a._v(" "),s("p",[a._v("因为Math.max不支持Math.max([param1,param2])也就是数组，但是它支持Math.max(param1,param2...)，所以可以根据apply的特点来解决 var max=Math.max.apply(null,array)，这样就轻易的可以得到一个数组中的最大项（apply会将一个数组转换为一个参数接一个参数的方式传递给方法）")]),a._v(" "),s("p",[a._v("这块在调用的时候第一个参数给了null，这是因为没有对象去调用这个方法，我只需要用这个方法帮我运算，得到返回的结果就行，所以直接传递了一个null过去。")]),a._v(" "),s("p",[a._v("用这种方法也可以实现得到数组中的最小项：Math.min.apply(null,array)")]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("Array.prototype.push可以实现两个数组的合并")])]),a._v(" "),s("p",[a._v("同样push方法没有提供push一个数组，但是它提供了push(param1,param2...paramN)，同样也可以用apply来转换一下这个数组，即：")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("var")]),a._v(" arr1"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{attrs:{class:"token class-name"}},[a._v("Array")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token string"}},[a._v('"1"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token string"}},[a._v('"2"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token string"}},[a._v('"3"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("var")]),a._v(" arr2"),s("span",{attrs:{class:"token operator"}},[a._v("=")]),s("span",{attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{attrs:{class:"token class-name"}},[a._v("Array")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token string"}},[a._v('"4"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token string"}},[a._v('"5"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{attrs:{class:"token string"}},[a._v('"6"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nArray"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("prototype"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),a._v("push"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arr1"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("arr2"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    "),s("span",{attrs:{class:"token comment"}},[a._v("//得到合并后数组的长度，因为push就是返回一个数组的长度")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])}],!1,null,null,null);r.options.__file="apply()与call().md";t.default=r.exports}}]);