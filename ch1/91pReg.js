function testValue(element,index,array){
   var textExp = /^[a-zA-Z]+$/
   return textExp.test(element)
}

var elemSet = ["**",123,"aaa","abc","-",46,"AAA"];

var result = elemSet.every(testValue)

console.log(result);

var elemSet2 = ["elephant","lion","cat","dog"]

result = elemSet2.every(testValue)

console.log(result);