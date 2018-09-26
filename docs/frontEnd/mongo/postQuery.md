## 查询后处理

常用的查询后处理的方法如下所示

```sort     排序
skip     跳过
limit    限制
select   显示字段
exect    执行
count    计数
distinct 去重
```

## sort()

```js
// 按age从小到大排序
temp.find().sort("age").exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 } ]
    console.log(docs);
});

// 按x从小到大，age从大到小排列
temp.find().sort("x -age").exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{  _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
});
```

## skip()

```js
// 跳过1个，显示其他
temp.find().skip(1).exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc888, name: 'huo', age: 30, x: 2, y: 1 },
    //{ _id: 5972ed35e6f98ec60e3dc889, name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
});
```

## limit()

```js
// 显示2个
temp.find().limit(2).exec(function(err,docs){
    //[ { _id: 5972ed35e6f98ec60e3dc886,name: 'huochai',age: 27,x: 1,y: 2 },
    //{ _id: 5972ed35e6f98ec60e3dc887,name: 'wang',age: 18,x: 1,y: 1 } ]
    console.log(docs);
});
```

## select()
```js

//显示name、age字段，不显示_id字段
temp.find().select("name age -_id").exec(function(err,docs){
    //[ { name: 'huochai', age: 27 },{ name: 'wang', age: 18 },{ name: 'huo', age: 30 },{ name: 'li', age: 20 } ]
    console.log(docs);
});
temp.find().select({name:1, age:1, _id:0}).exec(function(err,docs){
    //[ { name: 'huochai', age: 27 },{ name: 'wang', age: 18 },{ name: 'huo', age: 30 },{ name: 'li', age: 20 } ]
    console.log(docs);
});
// 下面将以上方法结合起来使用，跳过第1个后，只显示2个数据，按照age由大到小排序，且不显示_id字段

temp.find().skip(1).limit(2).sort("-age").select("-_id").exec(function(err,docs){
    //[ { name: 'huochai', age: 27, x: 1, y: 2 },
    //{ name: 'li', age: 20, x: 2, y: 2 } ]
    console.log(docs);
});

```

## count()

```js

// 显示集合temps中的文档数量

temp.find().count(function(err,count){
    console.log(count);//4
});
```

## distinct()
```js

// 返回集合temps中的x的值

temp.find().distinct('x',function(err,distinct){
    console.log(distinct);//[ 1, 2 ]
});