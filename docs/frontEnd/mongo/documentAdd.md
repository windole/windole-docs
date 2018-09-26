## 文档新增

1. 文档document的save()
2. 模型model的create()
3. 模型model的insertMany()

## save()

语法
```
save([options], [options.safe], [options.validateBeforeSave], [fn])
```

```js
// 新建{age:10,name:'save'}文档，并保存
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});
        var temp = mongoose.model('temp', schema);
        //使用链式写法
        new temp({age:10,name:'save'}).save(function(err,doc){
            //[ { _id: 59720bc0d2b1125cbcd60b3f, age: 10, name: 'save', __v: 0 } ]
            console.log(doc);
        });
    }
});
```

## create()
使用save()方法，需要先实例化为文档，再使用save()方法保存文档。而create()方法，则直接在模型Model上操作，并且可以同时新增多个文档

语法
```
Model.create(doc(s), [callback])
```
```js
// 新增{name:"xiaowang"}，{name:"xiaoli"}这两个文档
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});
        var temp = mongoose.model('temp', schema);
        temp.create({name:"xiaowang"},{name:"xiaoli"},function(err,doc1,doc2){
            //{ __v: 0, name: 'xiaowang', _id: 59720d83ad8a953f5cd04664 }
            console.log(doc1);
            //{ __v: 0, name: 'xiaoli', _id: 59720d83ad8a953f5cd04665 }
            console.log(doc2);
        });
    }
});
```

## insertMany()
语法
```
Model.insertMany(doc(s), [options], [callback])
```

```js
// 新增{name:"a"}，{name:"b"}这两个文档
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});
        var temp = mongoose.model('temp', schema);
        temp.insertMany([{name:"a"},{name:"b"}],function(err,docs){
            //[ { __v: 0, name: 'a', _id: 59720ea1bbf5792af824b30c },
            //{ __v: 0, name: 'b', _id: 59720ea1bbf5792af824b30d } ]
            console.log(docs);
        });

    }
});
```