## 中间件

前后钩子即pre()和post()方法，又称为中间件，是在执行某些操作时可以执行的函数。中间件在schema上指定，类似于静态方法或实例方法等

可以在数据库执行下列操作时，设置前后钩子

```txt
    init
    validate
    save
    remove
    count
    find
    findOne
    findOneAndRemove
    findOneAndUpdate
    insertMany
    update
```

## pre()

以find()方法为例，在执行find()方法之前，执行pre()方法
```js
var schema = new mongoose.Schema({ age:Number, name: String,x:Number,y:Number});
schema.pre('find',function(next){
    console.log('我是pre方法1');
    next();
});
schema.pre('find',function(next){
    console.log('我是pre方法2');
    next();
});
var temp = mongoose.model('temp', schema);
temp.find(function(err,docs){
    console.log(docs[0]);
})
/*
我是pre方法1
我是pre方法2
{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 }
*/
```

## post()
post()方法并不是在执行某些操作后再去执行的方法，而在执行某些操作前最后执行的方法，post()方法里不可以使用next()

```js
var schema = new mongoose.Schema({ age:Number, name: String,x:Number,y:Number});
schema.post('find',function(docs){
    console.log('我是post方法1');
});
schema.post('find',function(docs){
    console.log('我是post方法2');
});
var temp = mongoose.model('temp', schema);
temp.find(function(err,docs){
    console.log(docs[0]);
})
/*
我是post方法1
我是post方法2
{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 }
 */
```