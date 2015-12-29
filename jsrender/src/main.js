var rootPath = function(addonURL){
  return "http://localhost:8888/SSS/jsrender/"+addonURL
}
var tmpl = $.templates("#myTemplate")
// var tmpl = $.templates("Name: {{:name}}");
var resume = {
  photo:{src:rootPath("src/img/th.jpg"),cName:"thumbnail smallPhoto"},
  demographic:{name:"郑骏明",sex:"男",age:30,tel:"136****8185"},
  education:[{timeSta:"2004",timeEnd:"2010",school:"中山大学",degree:"学士"},{timeSta:"2010",timeEnd:"2012",school:"中山大学",degree:"博士"}],
  career:[{timeSta:"2012",timeEnd:"2013",company:"深圳市儿童医院",occupation:"医师"},{timeSta:"2013",timeEnd:"2015",company:"广州医科大学附属第二医院",occupation:"博士后"}]
}
var html = tmpl.render(resume)
$("#result").html(html)
