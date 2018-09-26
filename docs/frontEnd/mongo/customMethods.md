# 自定义方法

## 实例方法

Model的实例是`document`，内置实例方法有很多，如 save，可以通过Schema对象的methods属性给实例自定义扩展方法

```js
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ num:Number, name: String, size: String });
        schema.methods.findSimilarSizes = function(cb){
            // 实例方法， this指向当前实例
            return this.model('MyModel').find({size:this.size},cb);
        }
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ name:'doc1', size: 'small' });
        var doc2 = new MyModel({ name:'doc2', size: 'small' });
        var doc3 = new MyModel({ name:'doc3', size: 'big' });
        doc1.save();
        doc2.save();
        doc3.save();
        setTimeout(function(){
            doc1.findSimilarSizes(function(err,docs){
                docs.forEach(function(item,index,arr){
                    //doc1
                    //doc2
                     console.log(item.name)
                })
            })
        },0)
    }
});
```

## 静态方法

通过Schema对象的statics属性给 Model 添加静态方法

```js
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ num:Number, name: String, size: String });
        schema.statics.findByName = function(name,cb){
            return this.find({name: new RegExp(name,'i')},cb);
        }
        var MyModel = mongoose.model('MyModel', schema);
        var doc1 = new MyModel({ name:'doc1', size: 'small' });
        var doc2 = new MyModel({ name:'doc2', size: 'small' });
        var doc3 = new MyModel({ name:'doc3', size: 'big' });
        doc1.save();
        doc2.save();
        doc3.save();
        setTimeout(function(){
            MyModel.findByName('doc1',function(err,docs){
                //[ { _id: 5971e68f4f4216605880dca2,name: 'doc1',size: 'small',__v: 0 } ]
                console.log(docs);
            })
        },0)
    }
});
```

由上所示，实例方法和静态方法的区别在于，**静态方法是通过Schema对象的statics属性给model添加方法，实例方法是通过Schema对象的methods是给document添加方法**

## 查询方法
通过schema对象的query属性，给model添加查询方法

```js
var mongoose = require('mongoose');
mongoose.connect("mongodb://u1:123456@localhost/db1", function(err) {
    if(!err){
        var schema = new mongoose.Schema({ age:Number, name: String});
        schema.query.byName = function(name){
            return this.find({name: new RegExp(name)});
        }
        var temp = mongoose.model('temp', schema);
        temp.find().byName('huo').exec(function(err,docs){
            //[ { _id: 5971f93be6f98ec60e3dc86c, name: 'huochai', age: 27 },
            // { _id: 5971f93be6f98ec60e3dc86e, name: 'huo', age: 30 } ]
            console.log(docs);
        })

    }
});
```