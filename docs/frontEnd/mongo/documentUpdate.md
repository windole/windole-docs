## 文档更新

1. update()
2. updateMany()
3. find() + save()
4. updateOne()
5. findOne() + save()
6. findByIdAndUpdate()
7. fingOneAndUpdate()

## update()

第一个参数conditions为查询条件，第二个参数doc为需要修改的数据，第三个参数options为控制选项，第四个参数是回调函数
```txt
Model.update(conditions, doc, [options], [callback])
```

options有如下选项

```txt
    safe (boolean)： 默认为true。安全模式。
　  upsert (boolean)： 默认为false。如果不存在则创建新记录。
　　multi (boolean)： 默认为false。是否更新多个查询记录。
　　runValidators： 如果值为true，执行Validation验证。
　　setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
　　strict (boolean)： 以strict模式进行更新。
　　overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录。
```


```js
// 现在使用update()方法查询age大于20的数据，并将其年龄更改为40岁
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});
        var temp = mongoose.model('temp', schema);
        temp.update({age:{$gte:20}},{age:40},function(err,raw){
            //{ n: 1, nModified: 1, ok: 1 }
            console.log(raw);
        })

    }
});
```

如果要同时更新多个记录，需要设置options里的multi为true。下面将名字中有'a'字符的年龄设置为10岁

```js
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});
        var temp = mongoose.model('temp', schema);
        temp.update({name:/a/},{age: 10},{multi:true},function(err,raw){
            //{ n: 2, nModified: 2, ok: 1 }
            console.log(raw);
        })

    }
});
```

如果设置的查找条件，数据库里的数据并不满足，默认什么事都不发生
```js
temp.update({age:100},{name: "hundred"},function(err,raw){
    //{ n: 0, nModified: 0, ok: 1 }
    console.log(raw);
})
```
　　
如果设置options里的upsert参数为true，若没有符合查询条件的文档，mongo将会综合第一第二个参数向集合插入一个新的文档
```js
temp.update({age:100},{name: "hundred"},{upsert:true},function(err,raw){
    //{ n: 1, nModified: 0,upserted: [ { index: 0, _id: 5972c202d46b621fca7fc8c7 } ], ok: 1 }
    console.log(raw);
})

temp.update({name:/aa/},{age: 0},{upsert:true},function(err,raw){
    //{ n: 1, nModified: 0,upserted: [ { index: 0, _id: 5972c288d46b621fca7fdd8f } ], ok: 1 }
    console.log(raw);
})
```

:::tip
update()方法中的回调函数不能省略，否则数据不会被更新。如果回调函数里并没有什么有用的信息，则可以使用exec()简化代码
:::
```
temp.update({name:/aa/},{age: 0},{upsert:true}).exec();
```
## updateMany()

updateMany()与update()方法唯一的区别就是默认更新多个文档，即使设置{multi:false}也无法只更新第一个文档

```
Model.updateMany(conditions, doc, [options], [callback])
```

```js
//将数据库中名字中带有'huo'的数据，年龄变为50岁

temp.updateMany({name:/huo/},{age:50},function(err,raw){
    //{ n: 2, nModified: 2, ok: 1 }
    console.log(raw);
});
```

## find() + save()

如果需要更新的操作比较复杂，可以使用find()+save()方法来处理，比如找到年龄小于30岁的数据，名字后面添加'30'字符

```js
temp.find({age:{$lt:20}},function(err,docs){
    //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang', age: 10 },
    //{ _id: 5971f93be6f98ec60e3dc86f, name: 'li', age: 12 }]
    console.log(docs);
    docs.forEach(function(item,index,arr){
        item.name += '30';
        item.save();
    })
    //[ { _id: 5971f93be6f98ec60e3dc86d, name: 'wang30', age: 10 },
    // { _id: 5971f93be6f98ec60e3dc86f, name: 'li30', age: 12 }]
    console.log(docs);
});
```
## updateOne()

updateOne()方法只能更新找到的第一条数据，即使设置{multi:true}也无法同时更新多个文档

```js
// 将数据库中名字中带有'huo'的数据，年龄变为60岁

temp.updateOne({name:/huo/},{age:60},function(err,raw){
    //{ n: 1, nModified: 1, ok: 1 }
    console.log(raw);
});
```

## findOne() + save()

如果需要更新的操作比较复杂，可以使用findOne()+save()方法来处理，比如找到名字为'huochai'的数据，年龄加100岁

```js
temp.findOne({name:'huochai'},function(err,doc){
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 10 }
    console.log(doc);
    doc.age += 100;
    doc.save();
    //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 110 }
    console.log(doc);
});
```
## findOneAndUpdate()

fineOneAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}

```
Model.findOneAndUpdate([conditions], [update], [options], [callback])
```
## findByIdAndUpdate

fineByIdAndUpdate()方法的第四个参数回调函数的形式如下function(err,doc){}
```
Model.findOneAndUpdate([conditions], [update], [options], [callback])
```
