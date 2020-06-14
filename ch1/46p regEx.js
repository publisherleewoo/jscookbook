// var searchString = "Now is the time and this is the time and that is the time";
// var pattern = /t\w*e/g;

// var result = searchString.replace(pattern,"hi")

// console.log(result);


var searchString = "Now is the time and this is the time and that is the time";
var pattern = /t\w*e/g;
var matchArray;
var str="";

while(matchArray = pattern.exec(searchString)){
   console.log(matchArray);
   str+=" at " + matchArray.index + " we found " + matchArray[0] + "\n";
}
console.log(str);


 


//a로 시작해서, p가 1번이상 반복되고 모든문자이며 0번이상반복되는   pie로 끝나는동안
 