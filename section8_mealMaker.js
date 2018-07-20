let menu = {
  _courses: {
    appetizers: [],
  	mains: [],
  	desserts: [],
  },
  	
  set appetizers(newAppetizer) {
    this._courses.appetizers.push(newAppetizer);
  },

  set mains(newMain) {
    this._courses.mains.push(newMain);
  },
      
  set desserts(newDessert) {
    this._courses.desserts.push(newDessert);
  },

  get appetizers() {
    return this._courses.appetizers;
  },

  get mains() {
    return this._courses.mains;
  },

  get desserts() {
    return this._courses.desserts;
  },
  
  get courses() {
    const object1 = {
  		appetizers: this.appetizers,
  		mains: this.mains,
  		desserts: this.desserts,
		};
    return object1;
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  //  if (courseName === 'appetizers') {
  //    this._courses[appetizers].push(dish);
  //    //this.appetizers(dish);
  //  } else if (courseName === 'mains') {
  //    this._courses[mains].push(dish);
  //    //this.mains(dish);
  //  } else if (courseName === 'desserts') {
  //    this._courses[desserts].push(dish);
  //    //this.desserts(dish);
  //  } else {
  //    console.log(`invalid coursename, ${courseName}`);
  //  }
  },
  
  getRandomDishFromCourse(courseName) {
    return this._courses[courseName][Math.floor(Math.random() * Math.floor(this._courses[courseName].length))]
  },
  
  generateRandomMeal() {
    //const meal = {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
  //  };
    //return appetizer['name'];
    //console.log(main);
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}.  The price is $${totalPrice}.`
  },
};
//console.log(menu.courses);
menu.addDishToCourse('appetizers','crab cakes',11);
menu.addDishToCourse('appetizers','hot wings',8);
menu.addDishToCourse('appetizers','chip dip',7);
menu.addDishToCourse('mains','steak',25);
menu.addDishToCourse('mains','chicken',18);
menu.addDishToCourse('mains','fish',22);
menu.addDishToCourse('desserts','ice cream',3);
menu.addDishToCourse('desserts','cake',4);
menu.addDishToCourse('desserts','brownie',4);
//console.log(menu.courses);
//console.log(menu.getRandomDishFromCourse('appetizers'));
//console.log(menu.generateRandomMeal());

let meal = menu.generateRandomMeal();
console.log(meal);
