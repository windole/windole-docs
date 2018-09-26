## 文档验证

文档验证在SchemaType中定义，格式如下
```
required: 数据必须填写
default: 默认值
validate: 自定义匹配
min: 最小值(只适用于数字)
max: 最大值(只适用于数字)
match: 正则匹配(只适用于字符串)
enum:  枚举匹配(只适用于字符串)
```


## required
```js

// 将age设置为必填字段，如果没有age字段，文档将不被保存，且出现错误提示
var schema = new mongoose.Schema({ age:{type:Number,required:true}, name: String,x:Number,y:Number});
var temp = mongoose.model('temp', schema);
new temp({name:"abc"}).save(function(err,doc){
    //Path `age` is required.
    console.log(err.errors['age'].message);
});
```
## default

```js

// 设置age字段的默认值为18，如果不设置age字段，则会取默认值
var schema = new mongoose.Schema({ age:{type:Number,default:18}, name:String,x:Number,y:Number});
var temp = mongoose.model('temp', schema);
new temp({name:'a'}).save(function(err,doc){
    //{ __v: 0, name: 'a', _id: 59730d2e7a751d81582210c1, age: 18 }
    console.log(doc);
});
```

## min | max
```js

// 将age的取值范围设置为[0,10]。如果age取值为20，文档将不被保存，且出现错误提示
var schema = new mongoose.Schema({ age:{type:Number,min:0,max:10}, name: String,x:Number,y:Number});
var temp = mongoose.model('temp', schema);
new temp({age:20}).save(function(err,doc){
    //Path `age` (20) is more than maximum allowed value (10).
    console.log(err.errors['age'].message);
});
```

## match
```js

// 将name的match设置为必须存在'a'字符。如果name不存在'a'，文档将不被保存，且出现错误提示
var schema = new mongoose.Schema({ age:Number, name:{type:String,match:/a/},x:Number,y:Number});
var temp = mongoose.model('temp', schema);
new temp({name:'bbb'}).save(function(err,doc){
    //Path `name` is invalid (bbb).
    console.log(err.errors['name'].message);
});
```

## enum
```js

// 将name的枚举取值设置为['a','b','c']，如果name不在枚举范围内取值，文档将不被保存，且出现错误提示
var schema = new mongoose.Schema({ age:Number, name:{type:String,enum:['a','b','c']},x:Number,y:Number});
var temp = mongoose.model('temp', schema);
new temp({name:'bbb'}).save(function(err,doc){
    //`bbb` is not a valid enum value for path `name`.
    console.log(err.errors['name'].message);

});
```

## validate
```js

// validate实际上是一个函数，函数的参数代表当前字段，返回true表示通过验证，返回false表示未通过验证。利用validate可以自定义任何条件。比如，定义名字name的长度必须在4个字符以上
var validateLength = function(arg){
    if(arg.length > 4){
        return true;
    }
    return false;
};
var schema = new mongoose.Schema({ name:{type:String,validate:validateLength}, age:Number,x:Number,y:Number});
var temp = mongoose.model('temp', schema);
new temp({name:'abc'}).save(function(err,doc){
    //Validator failed for path `name` with value `abc`
    console.log(err.errors['name'].message);
});