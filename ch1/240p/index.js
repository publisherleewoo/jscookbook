const accounting = require("accounting")

var options  ={
   symbol:"$",
   decimal:".",
   thousand:",",
   precision:2,
   format:"%s%v"
}
var m = accounting.formatMoney(45998307,options)
console.log(m);