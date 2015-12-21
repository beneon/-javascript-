var tt = {
  mondayClasses:["英语","英语","数学","数学","基础护理","基础护理","",""],
  tuesdayClasses:["思修","思修","护理研究","护理研究","","","",""],
  wednesdayClasses:["生物","生物","物理","物理","基础护理","基础护理","",""],
  thursdayClasses:["化学","化学","","","营养学","营养学","",""],
  fridayClasses:["物理","物理","数学","数学","基础护理","基础护理","实验课","实验课"],
}

ta=new Array()
ta={a:1,b:3}
ta[0]=4
ta[1]=5
console.log(ta)
for(var prop in ta){
  console.log(prop+":"+ta[prop])
}
console.log(ta.length)
console.log(tt["mondayClasses"])
// for (tEle in tt){
//   console.log(tt[tEle])
// }
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
var ttArr = new Array()
ttArr["mon"]=tt.mondayClasses
ttArr["tue"]=tt.tuesdayClasses
ttArr["wed"]=tt.wednesdayClasses
ttArr["thu"]=tt.thursdayClasses
ttArr["fri"]=tt.fridayClasses
// console.log(ttArr)
