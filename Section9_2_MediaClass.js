class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }
  
  set checkedOut(checkedOut) {
    this._isCheckedOut = checkedOut;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  getAverageRating() {
    var average = 0;
    var i;
    
    if (this._ratings.length === 0) {
      return 0;
    } else {
      for (i = 0; i < this._ratings.length; i++) {
      average += this._ratings[i];
      }

      return average / this._ratings.length; 
    }
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
  }
  
  get artist() {
    return this._artist;
	}
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
console.log(historyOfEverything.getAverageRating());
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
console.log(speed.isCheckedOut);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
console.log(speed.getAverageRating());
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
