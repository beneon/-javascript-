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

```javascript
var stringA = "some text"
function testRun(){
  function childOfTestRun(){
    var regionalString = "yet some text"
  }
  console.log(stringA)//some text
  console.log(regionalString)//regionalString undefined
}
```


```javascript
var minVal = 4
var maxVal = 6
var testVal = 9
if(testVal < minVal){
  console.log("testVal is smaller than minimal value")
}else if (testVal < maxVal) {
  console.log("testVal is between minimal and maximal value")
}else{
  console.log("testVal is larger than maximal value")
}
```


```javascript
var result = ""
for(var rowNum = 0;rowNum<3;rowNum++){
  for(var colNum=0;colNum<4;colNum++){
    var currentNum = rowNum*4+colNum+1;
    result = result + currentNum +","
  }
  result = result + "\n"
}
console.log(result)
```

```javascript
for(var n=3;n<=100;n++){
  var isz = false
  for(var b=2;b<n;b++){
    var mod = n%b
    if(mod==0){
      isz = false
      break;
    }else{
      isz = true
    }
  }
    if(isz){console.log(n)}
}
```

```javascript
var mycars = new Array()
mycars[0] = "Audi"
mycars[1] = "Benz"
mycars[2] = "BMW"

for (i=0;i<mycars.length;i++)
{
  console.log(mycars[i])
}
```
