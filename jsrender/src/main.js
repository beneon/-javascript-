var tmpl = $.templates("#myTemplate")
// var tmpl = $.templates("Name: {{:name}}");
var resume = {
  photo:{src:"img/th.jpg",cName:"thumbnail smallPhoto"}
}
var html = tmpl.render(resume)
$("#result").html(html)
