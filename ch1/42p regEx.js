var searchString  = "Now is the time, this is the time"

var re = /t\w{2}e/g
/*
t??e
\w는 word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미한다. 
{}는 반복됨을 의미한다.
즉 t와 e사이의 2개의 반복되는 단어.

t\w*e  (t와 e사이의 단어가) 0번이상 반복

t\w?e  0번 또는 1번이상 반복

t\w+e  1번이상반복    
*/

var changeWord=searchString.replace(re,'place')

console.log(changeWord);


