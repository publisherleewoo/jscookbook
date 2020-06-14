let str = "this is a list of items: cherries, Limes, oranges, apples"
let start = str.indexOf(":")
let target = str.substring(start+1,str.length);
let result = target.replace(/ /g,"").split(",")
 console.log(result);