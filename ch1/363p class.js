class Book{
   constructor(title,author,pubdate){
      this.title=title;
      this.author=author;
      this.pubdate=pubdate
   }
   getBook(){
      return this.author + " published " + this.title + " in " + this.pubdate
   }
}

class TypedBook extends Book {
   constructor(title,author,pubdate,type){
      super(title,author,pubdate)
      this.type=type
   }
   getBook(){
      return super.getBook() + " - category: " + this.type
   }
   getType(){
      return this.type
   }
}

var bookA = new TypedBook("winning","Sally",2012,"history")

 console.log(bookA.getBook())
 console.log(bookA.getType())
