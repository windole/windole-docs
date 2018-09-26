## 联表操作
**语法**
```
Query.populate(path, [select], [model], [match], [options])
```

1. path

指定要查询的表

2. select(可选)

指定要查询的字段

3. model(可选)

类型：Model，可选，指定关联字段的 model，如果没有指定就会使用Schema的ref。

4. match(可选)

类型：Object，可选，指定附加的查询条件。

5. options(可选)

类型：Object，可选，指定附加的其他查询选项，如排序以及条数限制等等。

```js
Catetory.find({_id:catId})
        .populate({path:'movies',select:'title poster',options:{limit:5}})
        .exec(function(err,catetories){
                    if (err) {
                        console.log(err);
                    }

        })
```

下面以一个实例的形式来介绍下mongoose中的联表操作population

以类别category和文章post之间的关联为例

其中，category的model如下所示

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema(
  {
    number: { type: Number, required: true, index: true, unique: true, min:[1000000000, '位数不足'], max: [9999999999, '位数过长'] },
    name: { type: String, required: true, validate: { validator: (v) => v.trim().length, message: '名称不能为空'} },
    description: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    recommend: { type: Boolean },
    index: { type: Number }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Category', CategorySchema)
```

post的model如下所示

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    content: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', index: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'Like' }],
    imgUrl: { type: String },
    recommend: { type: Boolean },
    index: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', PostSchema)
```

在对类别的操作中， 都需要使用populate操作符显示出所包括的posts中的title

```js
  /* 加载所有类别 */
  app.get('/categories', (req, res) => {
    Category.find().populate('posts','title').select("number name description recommend index").exec((err, docs) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      return res.status(200).json({code: 1, message: '获取类别成功', result: {docs}})
    })
  })

  /* 新增一个类别 */
  app.post('/categories', adminAuth, (req, res) => {
    new Category(req.body).save((err, doc) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      doc.populate({path:'posts',select:'title'}, (err, doc) => {
        if (err) return res.status(500).json({code:0, message: err.message, err})
        return res.status(200).json({code: 1, message: '新增成功', result: {doc}})
      })
    })
  })
```

在对文章的操作中，则需要显示出类别category的number属性

```js
  /* 按照id加载一篇文章 */
  app.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id).populate('category','number').exec((err, doc) => {
      if (err) return res.status(500).json({code:0, message:err.message, err})
      if (doc === null) return res.status(404).json({code:0, message:'文章不存在'})
      return res.status(200).json({code:1, message:'获取文章成功', result:{doc}})
    })
  })

  /* 加载所有文章 */
  app.get('/posts', (req, res) => {
    Post.find().select("title likes comments recommend imgUrl index").populate('category','number').sort("-createdAt").exec((err, docs) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      return res.status(200).json({code: 1, message: '获取文章成功', result: {docs}})
    })
```

在新增、更新和删除文章的操作中，都需要重建与category的关联

```js
// 关联category的posts数组
fnRelatedCategory = _id => {
  Category.findById(_id).exec((err, categoryDoc) => {
    if (err) return res.status(500).json({ code: 0, message: err.message, err })
    if (categoryDoc === null) return res.status(404).json({code:0, message:'该类别不存在，请刷新后再试'})
    Post.find({ category: _id }).exec((err, postsDocs) => {
      if (err) return res.status(500).json({ code: 0, message: err.message, err })
      categoryDoc.posts = postsDocs.map(t => t._id)
      categoryDoc.save(err => {
        if (err) return res.status(500).json({ code: 0, message: err.message, err })
      })
    })
  })
}

  /* 按照id更新一篇文章 */
  app.put('/posts/:id', adminAuth, (req, res) => {
    Post.findById(req.params.id).exec((err, doc) => {
      if (err) return res.status(500).json({code: 0, message: err.message, err})
      if (doc === null) return res.status(404).json({code: 0, message: '文章不存在，请刷新后再试'})
      for (prop in req.body) {
        doc[prop] = req.body[prop]
      }
      doc.save((err) => {
        if (err) return res.status(500).json({code: 0, message: err.message, err})
        doc.populate({path:'category',select:'number'}, (err, doc) => {
          if (err) return res.status(500).json({code:0, message: err.message, err})
          fnRelatedCategory(doc.category._id)
          return res.status(200).json({code: 1, message: '更新成功', result: {doc}})
        })
      })
    })
  })
```