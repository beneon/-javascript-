var tmpl = $.templates("#myTemplate")
var person = {name:"Jim"}
var people = [{name:"Jim"},{name:"Pedro"}]
var html = tmpl.render(people)
