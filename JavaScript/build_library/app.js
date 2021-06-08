class media {
  constructor(title){
    this._title= title;
    this._isCheckedOut= true;
    this._ratings=[];
  }

get title(){
  return this._title;
}

get isCheckedOut(){
  return this._isCheckedOut;
} 

get ratings(){
  return this._ratings;
}

toggleCheckOutStatus(){
  this._isCheckedOut=!this._isCheckedOut;
}

set isCheckedOut(argu){
  this._isCheckedOut= argu;
}

getAverageRating(){
  let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
  const lengthOfArray = this._ratings.length;
  return ratingsSum/lengthOfArray;
  
}

addRating(argument){
   this._ratings.push(argument)
}

}

class Book extends media{
   constructor(author,title,pages){
     super(title);
     this._author= author;
     this._pages= pages;
   }

   get author(){
    return this._author= author;
   }

   get pages(){
     return this._pages= pages;
   }
}

class Movie extends media{
  constructor(director,title,runTime){
    super(title);
    this._director= director;
    this._runTime= runTime;
  }

  get director(){
    return this._director= director;
  }

  get runTime(){
    return this._runTime=runTime;
  }
}

const historyOfEverything= new Book('Bill Bryson','A Short History of Nearly Everything',544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

const speed= new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())

