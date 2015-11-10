# javascript 学习
## 第一天 hello world
### 目的：确保编程环境
### 步骤：
- 安装chrome浏览器，atom文本编辑器
-  在桌面建立项目文件夹（今后称其为SSS），今后相关文件全部放在这个文件夹里面，注意管理
- 将SSS加入atom的项目文件夹
> atom下面 file>Add project folder>选取建立的项目文件夹
- 在SSS中建立第一个html文件d1.html
- d1.html中输入下列代码：

```html
<head>
<script>
  function testRun(){
    console.log("Hello World!")
  }
</script>
</head>
<body onload="testRun()">
</body>
```

- 用Chrome打开d1.html
> (可以让chrome成为默认html打开工具，或者先打开chrome，然后把d1.html拖到chrome上面)
> 关于拖动：可以使用windows键+左，windows键+右让资源管理器和chrome分别占左右两边，然后再进行拖动（选择一个窗口>windows键+左）

- 在chrome里面打开开发者工具
> 可以在页面空白的地方右键>审查元素；也可以点击选项按钮（一个像“三”的按钮），然后选择更多工具>开发者工具

- 选择console选单
- 这个时候应该可以看到Hello World的字样了

### 说明
- 这份文档是使用markdown语言书写，用来写文档其实很方便，有兴趣的话可以学习
- chrome浏览器是接下来课程**必备**的工具，同时，所有编写的页面都**不能**使用ie 6作为浏览器打开，目前还没有功夫兼顾兼容性
- console.log()会是接下来非常常用的一个语句，主要是把括号里面的东西在console中显示出来，这次要显示的是一个"Hello World!"的字符串（string），以后会用它显示更多东西。**用来除错的时候非常有用。**
- 这次写的是一个html页面，就是网页，除去`<script>`里面的部分，主要分两块，`<head>`和`<body>`，浅显理解的话，head是放不显示的内容，幕后的东西，body是放显示出来的内容。
- 请注意html的标记（就是那些<>扩起来的东西）都是成对出现的(`<some tag>...</some tag>`)
- `<body onload="testRun()">` 里面的`onload="testRun()"`暂时先不用管，只要知道这个是对应`<script>`里面的`function testRun()`就可以了
- `function testRun(){}`是我们写的一个函数/方法/带名字的一段代码，函数会非常的常用，而javascript里面函数还比其他语言多一些内容，以后会讲到
- 编程的时候请使用**英文输入法**,如果你的程序出现了问题，请先检查是不是`""`打成了“”，,打成了，()打成了（）
- 这次最重要的内容是下面几点：
  - 看到"Hello World!"字样，说明自己已经完成了编程环境的构建
  >（一个html，一个可以看它的浏览器和一个能编辑他的编辑器）

  - 了解`<head><script></script></head> <body></body>`的结构
