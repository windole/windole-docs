## 文档查询

1. find()
2. findById()
3. findOne()

## find()
第一个参数表示查询条件，第二个参数用于控制返回的字段，第三个参数用于配置查询参数，第四个参数是回调函数，回调函数的形式为function(err,docs){}
语法
```
Model.find(conditions, [projection], [options], [callback])
```

```js
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});
        var temp = mongoose.model('temp', schema);
        temp.find(function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
            //{ _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 18 },
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 },
            //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 } ]
            console.log(docs);
        })
    }
});
```

```js
// 找出年龄大于18且名字里存在'huo'的数据
temp.find({name:/huo/,age:{$gte:18}},function(err,docs){
    //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
    //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 }]
    console.log(docs);
})
// _id字段默认输出, 如果确实不需要_id字段输出，可以进行如下设置
temp.find({name:/a/},{name:1,_id:0},function(err,docs){
    //[ { name: 'huochai' }, { name: 'wang' } ]
    console.log(docs);
})
```

## findById()

语法
```
Model.findById(id, [projection], [options], [callback])
```
```js
// 显示第0个元素的所有字段
var aIDArr = [];
temp.find(function(err,docs){
    docs.forEach(function(item,index,arr){
        aIDArr.push(item._id);
    })
    temp.findById(aIDArr[0],function(err,doc){
        //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
        console.log(doc);
    })
})

|

var aIDArr = [];
temp.find(function(err,docs){
    docs.forEach(function(item,index,arr){
        aIDArr.push(item._id);
    })
    temp.findById(aIDArr[0]).exec(function(err,doc){
        //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
        console.log(doc);
    })
})
```

## findOne()
语法
```
Model.findOne([conditions], [projection], [options], [callback])
```

```js
// 找出age>20的文档中的第一个文档
temp.findOne({age:{$gt : 20}},function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
    console.log(doc);
})
temp.findOne({age:{$gt : 20}}).exec(function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 }
    console.log(doc);
})
```

## 常用的查询条件

```
$or　　　　    或关系
$nor　　　     或关系取反
$gt　　　　    大于
$gte　　　     大于等于
$lt　　　　    小于
$lte　　　     小于等于
$ne　　　　    不等于
$in　　　　    在多个值范围内
$nin　　　     不在多个值范围内
$all　　　     匹配数组中多个值
$regex　　     正则，用于模糊查询
$size　　　    匹配数组大小
$maxDistance　 范围查询，距离（基于LBS）
$mod　　　　   取模运算
$near　　　    邻域查询，查询附近的位置（基于LBS）
$exists　　    字段是否存在
$elemMatch　   匹配内数组内的元素
$within　　　   范围查询（基于LBS）
$box　　　　    范围查询，矩形范围（基于LBS）
$center　　　   范围醒询，圆形范围（基于LBS）
$centerSphere　 范围查询，球形范围（基于LBS）
$slice　　　　  查询字段集合中的元素（比如从第几个之后，第N到第M个元素
```

## $where
如果要进行更复杂的查询，需要使用$where操作符，$where操作符功能强大而且灵活，它可以使用任意的JavaScript作为查询的一部分，包含JavaScript表达式的字符串或者JavaScript函数

### 使用字符串
```js
temp.find({$where:"this.x == this.y"},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
})
temp.find({$where:"obj.x == obj.y"},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
})
```

### 使用函数
```js
temp.find({$where:function(){
        return obj.x !== obj.y;
    }},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
})
temp.find({$where:function(){
        return this.x !== this.y;
    }},function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
})
```