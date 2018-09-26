## 基本命令

## 基础Shell命令：

了解存储结构后，就可以开始学习我们的基础Shell命令了，因为这些命令比较基础，我会以列表形式展现，具体使用方法可以到视频中进行观看。

- show dbs :显示已有数据库，如果你刚安装好，会默认有local、admin(config)，这是MongoDB的默认数据库，我们在新建库时是不允许起这些名称的。
- use admin： 进入数据，也可以理解成为使用数据库。成功会显示：switched to db admin。
- show collections: 显示数据库中的集合（关系型中叫表，我们要逐渐熟悉）。
- db:显示当前位置，也就是你当前使用的数据库名称，这个命令算是最常用的，因为你在作任何操作的时候都要先查看一下自己所在的库，以免造成操作错误。

## 数据操作基础命令：

- use db（建立数据库）：use不仅可以进入一个数据库，如果你敲入的库不存在，它还可以帮你建立一个库。但是在没有集合前，它还是默认为空。
- db.集合.insert( ):新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。Demo：db.user.insert({“name”:”windole”})
- db.集合.find( ):查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的。Demo：db.user.find()
- db.集合.findOne( ):查询第一个文件数据，这里需要注意的，所有MongoDB的组合单词都使用首字母小写的驼峰式写法。
- db.集合.update({查询},{修改}):修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的，比如下面的例子。
``` js
db.user.update({"name":"windole"},{"name":"windole","age":"32"})
```
- db.集合.remove(条件)：删除文件数据，注意的是要跟一个条件。Demo:db.user.remove({“name”:”windole”})
- db.集合.drop( ):删除整个集合，这个在实际工作中一定要谨慎使用，如果是程序，一定要二次确认。
- db.dropDatabase( ):删除整个数据库，在删除库时，一定要先进入数据库，然后再删除。实际工作中这个基本不用，实际工作可定需要保留数据和痕迹的。

## 用js文件写mongo命令

1. 新建一个goTask.js文件。文件内容如下：

```js
var userName="windole";    //声明一个登录名
var timeStamp=Date.parse(new Date());     //声明登录时的时间戳
var jsonDdatabase={"loginUnser":userName,"loginTime":timeStamp}; //组成JSON字符串
var db = connect('log');   //链接数据库
db.login.insert(jsonDdatabase);  //插入数据
print('[demo]log  print success');  //没有错误显示成功
```

2. 执行JS文件
``` bash
mongo goTask.js
```
然后我们可以在命令行看到已经执行成功，可以到终端中进行查看插入结果。