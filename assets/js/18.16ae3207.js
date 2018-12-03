(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{192:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"文档新增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档新增","aria-hidden":"true"}},[s._v("#")]),s._v(" 文档新增")]),s._v(" "),a("ol",[a("li",[s._v("文档document的save()")]),s._v(" "),a("li",[s._v("模型model的create()")]),s._v(" "),a("li",[s._v("模型model的insertMany()")])]),s._v(" "),a("h2",{attrs:{id:"save"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save","aria-hidden":"true"}},[s._v("#")]),s._v(" save()")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("save([options], [options.safe], [options.validateBeforeSave], [fn])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 新建{age:10,name:'save'}文档，并保存")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mongoose "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("require")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'mongoose'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("connect")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"mongodb://u1:123456@localhost/db1"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" schema "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("mongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Schema")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" age"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("Number"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" String"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" temp "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'temp'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" schema"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token comment"}},[s._v("//使用链式写法")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("temp")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("age"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token string"}},[s._v("'save'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("save")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("doc"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token comment"}},[s._v("//[ { _id: 59720bc0d2b1125cbcd60b3f, age: 10, name: 'save', __v: 0 } ]")]),s._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("doc"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[s._v("#")]),s._v(" create()")]),s._v(" "),a("p",[s._v("使用save()方法，需要先实例化为文档，再使用save()方法保存文档。而create()方法，则直接在模型Model上操作，并且可以同时新增多个文档")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Model.create(doc(s), [callback])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v('// 新增{name:"xiaowang"}，{name:"xiaoli"}这两个文档')]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mongoose "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("require")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'mongoose'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("connect")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"mongodb://u1:123456@localhost/db1"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" schema "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("mongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Schema")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" age"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("Number"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" String"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" temp "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'temp'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" schema"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        temp"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("create")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token string"}},[s._v('"xiaowang"')]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token string"}},[s._v('"xiaoli"')]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("doc1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("doc2"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token comment"}},[s._v("//{ __v: 0, name: 'xiaowang', _id: 59720d83ad8a953f5cd04664 }")]),s._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("doc1"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{attrs:{class:"token comment"}},[s._v("//{ __v: 0, name: 'xiaoli', _id: 59720d83ad8a953f5cd04665 }")]),s._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("doc2"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"insertmany"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insertmany","aria-hidden":"true"}},[s._v("#")]),s._v(" insertMany()")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Model.insertMany(doc(s), [options], [callback])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v('// 新增{name:"a"}，{name:"b"}这两个文档')]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" mongoose "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("require")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'mongoose'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("connect")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"mongodb://u1:123456@localhost/db1"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" schema "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("mongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Schema")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" age"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("Number"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" String"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" temp "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" mongoose"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'temp'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" schema"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        temp"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("insertMany")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token string"}},[s._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token string"}},[s._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("docs"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token comment"}},[s._v("//[ { __v: 0, name: 'a', _id: 59720ea1bbf5792af824b30c },")]),s._v("\n            "),a("span",{attrs:{class:"token comment"}},[s._v("//{ __v: 0, name: 'b', _id: 59720ea1bbf5792af824b30d } ]")]),s._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("docs"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}],!1,null,null,null);e.options.__file="documentAdd.md";t.default=e.exports}}]);