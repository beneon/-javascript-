function CardTemplate(){
  var nameStr,maleBool,idNum,birthStr,job
  this.init=function(nameStr,maleBool,idNum,birthStr){
    if(typeof nameStr == "string"){
      this.nameStr = nameStr
    }else{
      this.nameStr = null
      console.log("wrong input for name")
    }
    if(typeof maleBool == "boolean"){
      this.maleBool = maleBool
    }else{
      this.maleBool = null
      console.log("wrong input for maleBool")
    }
    if(typeof idNum == "number"){
      this.idNum = idNum
    }else{
      this.idNum = null
      console.log("wrong input for id")
    }
    this.birthStr = birthStr
    this.job = "programmer"
  }
  this.descript = function(){
    var descriptStr = "name: "+this.nameStr+" "
    if(this.maleBool == null){
      descriptStr += "sex: unknown "
    }else{
      descriptStr += "sex: "+(this.maleBool?"male":"female")+" "
    }
    descriptStr += "id: "+this.idNum+" "
    descriptStr += "job:"+this.job+" "
    descriptStr += "birthDay "+this.birthStr
    return descriptStr
  }
}

var benId = new CardTemplate()
var lucyId = new CardTemplate()
var johnId = new CardTemplate()
benId.init("Ben",true,11344,"1993-12-04")
lucyId.init("Lucy",false,11942,"1995-11-2")
johnId.init("John",true,11444,"1991-01-05")
console.log(benId.nameStr)
console.log(benId.descript())
console.log(lucyId.descript())
console.log(johnId.descript())
console.log(typeof true)
console.log("ccc".indexOf("p"))
