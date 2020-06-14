function Tune(song,artist){
   var _title=song;   
   this.concat=function(){
      //비공개 변수에 접근 가능한 특권메서드 (privileged method)
      return _title + " " + artist
   }
}

var obj = new Tune("test","abcd")
console.log(obj.concat());
