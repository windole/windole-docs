## 文档删除

1. remove()
2. findOneAndRemove()
3. findByIdAndRemove()

## remove()

remove有两种形式，一种是文档的remove()方法，一种是Model的remove()方法

### Model的remove()方法
该方法的第一个参数conditions为查询条件，第二个参数回调函数

语法
```
model.remove(conditions, [callback])
```

```js
// 删除数据库中名称包括'30'的数据
temp.remove({name:/30/},function(err){})
// 使用exec()方法来简写代码
temp.remove({name:/30/}).exec()
```

### 文档的remove()方法

该方法的参数回调函数的形式如下function(err,doc){}

```js
// 删除数据库中名称包含'huo'的数据
temp.find({name:/huo/},function(err,doc){
    doc.forEach(function(item,index,arr){
        item.remove(function(err,doc){
            //{ _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 30 }
            //{ _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 60 }
            console.log(doc);
        })
    })
})
```
:::tip
文档的remove()方法的回调函数参数可以省略
:::

## findOneAndRemove()

model的remove()会删除符合条件的所有数据，如果只删除符合条件的第一条数据，则可以使用model的findOneAndRemove()方法
```
Model.findOneAndRemove(conditions, [options], [callback])
```

```js
//现在删除第一个年龄小于20的数据
temp.findOneAndRemove({age:{$lt:20}},function(err,doc){
    //{ _id: 5972d3f3e6f98ec60e3dc873, name: 'wang', age: 18 }
    console.log(doc);
})
// exec
temp.findOneAndRemove({age:{$lt:20}}).exec()
```


## bfindByIdAndRemove()

语法
```
Model.findByIdAndRemove(id, [options], [callback])
```

```js
// 删除第0个元素

var aIDArr = [];
temp.find(function(err,docs){
    docs.forEach(function(item,index,arr){
        aIDArr.push(item._id);
    })
    temp.findByIdAndRemove(aIDArr[0],function(err,doc){
        //{ _id: 5972d754e6f98ec60e3dc882, name: 'huochai', age: 27 }
        console.log(doc);
    })
})
```
该方法也不能省略回调函数，否则数据不会被删除。当然，可以使用exec()方法来简写代码

```js
var aIDArr = [];
temp.find(function(err,docs){
    docs.forEach(function(item,index,arr){
        aIDArr.push(item._id);
    })
    temp.findByIdAndRemove(aIDArr[0]).exec()
})
```
