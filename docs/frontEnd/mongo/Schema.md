## Schema

Schema主要用于定义MongoDB中集合Collection里文档document的结构

定义Schema，只用指定字段名和类型即可，支持的类型包括以下8种

```txt
String      字符串
Number      数字
Date        日期
Buffer      二进制
Boolean     布尔值
Mixed       混合类型
ObjectId    对象ID
Array       数组
```

通过mongoose.Schema来调用Schema，然后使用new方法来创建schema对象

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```

:::tip
创建Schema对象时，声明字段类型有两种方法，一种是首字母大写的字段类型，另一种是引号包含的小写字段类型
:::

```js
var mySchema = new Schema({title:String, author:String});
//或者
var mySchema = new Schema({title:'string', author:'string'});
```

## timestamps

在schema中设置timestamps为true，schema映射的文档document会自动添加createdAt和updatedAt这两个字段，代表创建时间和更新时间

```js
var UserSchema = new Schema(
  {...},
  { timestamps: true }
);
```

## _id

每一个文档document都会被mongoose添加一个不重复的_id，_id的数据类型不是字符串，而是`ObjectID`类型。如果在查询语句中要使用`_id`，则需要使用`findById`语句，而不能使用find或findOne语句