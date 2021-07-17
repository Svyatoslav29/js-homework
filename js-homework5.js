/////////MODULE 5//////////
task 1
const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const child = Object.create(parent);
  
  // Пиши код выше этой строки
  child.name = 'Jason';
  child.age = 27;

  task 2
  const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const parent = Object.create(ancestor);
  parent.name = 'Stacey';
  parent.surname = 'Moore';
  parent.age = 54;
  
  const child = Object.create(parent);
  child.name = 'Jason';
  child.age = 27;
  
  // Пиши код выше этой строки

  task 3
  function Car(brand, model, price) {
    this.brand = brand;
      this.model = model;
      this.price = price;
    }
    
    const test = new Car();

    task 4
    function Car({brand, model, price}) {
        this.brand = brand;
        this.model = model;
        this.price = price;
      }

      task 5
      function Car({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
      }
      
      Car.prototype.getPrice = function() {
        return this.price;
      };
      
      Car.prototype.changePrice = function(newPrice) {
      this.price = newPrice;
      };

      task 6

      function Storage(items) {
        this.items = items;
        }
        
        Storage.prototype.getItems = function() {
        return this.items;
        }
        
        Storage.prototype.addItem = function(newItem) {
        return this.items.push(newItem);
        }
        
        Storage.prototype.removeItem = function(item) {
        return this.items.splice(this.items.indexOf(item), 1);
        }
        
        // Пиши код выше этой строки
        const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
        console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
        storage.addItem('Дроид');
        console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
        storage.removeItem('Пролонгер');
        console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

        task 7

function StringBuilder(baseValue) {
    this.value = baseValue;
    };
    
    StringBuilder.prototype.getValue = function() {
    return this.value;
    }
    
    StringBuilder.prototype.padEnd = function(str) {
     this.value += str;
    }
    
    StringBuilder.prototype.padStart = function(str) {
     this.value = str + this.value;
    }
    
    StringBuilder.prototype.padBoth = function(str) {
     this.value = str + this.value + str;
    }
    
    // Пиши код выше этой строки
    const builder = new StringBuilder('.');
    console.log(builder.getValue()); // '.'
    builder.padStart('^');
    console.log(builder.getValue()); // '^.'
    builder.padEnd('^');
    console.log(builder.getValue()); // '^.^'
    builder.padBoth('=');
    console.log(builder.getValue()); // '=^.^='

    task 8
    class Car {}

    task 9
    class Car {
        brand;
        model;
        price;
      
      constructor({ brand, model, price }){
      this.brand = brand;
        this.model = model;
        this.price = price;
       }
      }

      task 10
      class Car {
        constructor({ brand, model, price }) {
          this.brand = brand;
          this.model = model;
          this.price = price;
        }
        
        getPrice (){
        return this.price;
        };
      
        changePrice (newPrice) {
        this.price = newPrice;
        };
      }

      task 11
      class Car {
  
        #brand;
        constructor({ brand, model, price }) {
          this.#brand = brand;
          this.model = model;
          this.price = price;
        }
        
        getBrand() {
        return this.#brand;
        };
        
        changeBrand(newBrand) {
        this.#brand = newBrand;
        }
      }

      task 12
      class Storage {
        #items;
         
        constructor(items) {
        this.#items = items;
        }
      
      
      getItems() {
        return this.#items;
      };
      
      addItem(newItem) {
        this.#items.push(newItem);
      };
      
      removeItem(item) {
        const itemIndex = this.#items.indexOf(item);
        this.#items.splice(itemIndex, 1);
       };
      };

      task 13

      class StringBuilder {
        #value;
        constructor(baseValue) {
        this.#value = baseValue;
        };
      
      getValue() {
        return this.#value;
      };
      
      padEnd(str) {
        this.#value += str;
      };
      
      padStart(str) {
        this.#value = str + this.#value;
      };
      
      padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
      };
      }

      task 14
      class Car {
        #model;
        #price;
        #brand;
      
        constructor({ brand, model, price }) {
          this.#brand = brand;
          this.#model = model;
          this.#price = price;
        }
      
        get brand() {
          return this.#brand;
        }
      
        set brand(newBrand) {
          this.#brand = newBrand;
        }
      
        get model() {
          return this.#model;
        }
      
        set model(newModel) {
          this.#model = newModel;
        }
      
        get price() {
          return this.#price;
        }
      
        set price(newPrice) {
          this.#price = newPrice;
        }
      }

      task 15
      class Car {
        // Пиши код ниже этой строки
        static MAX_PRICE = 50000;
        #price;
      
        constructor({ price }) {
          this.#price = price;
        }
      
        get price() {
          return this.#price;
        }
      
        set price(newPrice) {
          if (newPrice > Car.MAX_PRICE) {
          return;
          }
          this.#price = newPrice;
        }
        // Пиши код выше этой строки
      }
      
      const audi = new Car({price: 35000});
      console.log(audi.price); // 35000
      
      audi.price = 49000;
      console.log(audi.price); // 49000
      
      audi.price = 51000;
      console.log(audi.price); // 49000

      task 16
      class Car {
        static #MAX_PRICE = 50000;
        // Пиши код ниже этой строки
      static checkPrice(price) {
      if (price > Car.#MAX_PRICE) {
      return 'Внимание! Цена превышает допустимую.'
      }
        return 'Всё хорошо, цена в порядке.'
      }
        // Пиши код выше этой строки
        constructor({ price }) {
          this.price = price;
        }
      }
      
      const audi = new Car({ price: 36000 });
      const bmw = new Car({ price: 64000 });
      
      console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
      console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

      task 17
      class User {
        email;
      
        constructor(email) {
          this.email = email;
        }
      
        get email() {
          return this.email;
        }
      
        set email(newEmail) {
          this.email = newEmail;
        }
      }
      // Пиши код ниже этой строки
      class Admin extends User {
      static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
      }

      task 18
      class User {
        email;
      
        constructor(email) {
          this.email = email;
        }
      
        get email() {
          return this.email;
        }
      
        set email(newEmail) {
          this.email = newEmail;
        }
      }
      
      class Admin extends User {
        // Пиши код ниже этой строки
        accessLevel;
        
      constructor({email, accessLevel}) {
        super(email);
        this.accessLevel = accessLevel;
      }
        static AccessLevel = {
          BASIC: 'basic',
          SUPERUSER: 'superuser'
        };
      
        // Пиши код выше этой строки
      }
      
      const mango = new Admin({
        email: 'mango@mail.com',
        accessLevel: Admin.AccessLevel.SUPERUSER
      });
      
      console.log(mango.email); // mango@mail.com
      console.log(mango.accessLevel); // superuser

      task 19
      class User {
        email;
      
        constructor(email) {
          this.email = email;
        }
      
        get email() {
          return this.email;
        }
      
        set email(newEmail) {
          this.email = newEmail;
        }
      }
      class Admin extends User {
        // Пиши код ниже этой строки
      blacklistedEmails = [];
       blacklist(email) {
       this.blacklistedEmails.push(email)
       };
        
       isBlacklisted(email) {
       return this.blacklistedEmails.includes(email)
       };
        
        
        static AccessLevel = {
          BASIC: 'basic',
          SUPERUSER: 'superuser'
        };
      
        accessLevel;
      
        constructor({ email, accessLevel }) {
          super(email);
          this.accessLevel = accessLevel;
        }
      
        // Пиши код выше этой строки
      }
      
      const mango = new Admin({
        email: 'mango@mail.com',
        accessLevel: Admin.AccessLevel.SUPERUSER
      });
      
      console.log(mango.email); // mango@mail.com
      console.log(mango.accessLevel); // superuser
      mango.blacklist('poly@mail.com');
      console.log(mango.blacklistedEmails); // 'poly@mail.com'
      console.log(mango.isBlacklisted('mango@mail.com')); //  false
      console.log(mango.isBlacklisted('poly@mail.com')); // true 

      /////////MODULE 6//////////
    task 1
    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;
        // Пиши код ниже этой строки
      
       orderedItems.forEach(function(orderedItem) {
           totalPrice += orderedItem ;                
                           }) 
        // Пиши код выше этой строки
        return totalPrice;
      }

      task 2
      function filterArray(numbers, value) {
        const filteredNumbers = [];
        // Пиши код ниже этой строки
      
        numbers.forEach ((number)=>
                         { if (number > value) {
            filteredNumbers.push(number)}
          });
        
        // Пиши код выше этой строки
        return filteredNumbers;
      }

      task 3
      function getCommonElements(firstArray, secondArray) {
        const commonElements = [];
        // Пиши код ниже этой строки
      
        firstArray.forEach ((element) => {
          if (secondArray.includes(element)) {
            commonElements.push(element);
          }
        });
      
        return commonElements;
        // Пиши код выше этой строки
      }

      task 4
      const calculateTotalPrice =(quantity, pricePerItem) =>{
        // Пиши код выше этой строки
        return quantity * pricePerItem;
      }

      task 5
      const calculateTotalPrice = (quantity, pricePerItem) => 
   quantity * pricePerItem;
;
      task 6
      const calculateTotalPrice = (orderedItems) => {
        let totalPrice = 0;
      
        orderedItems.forEach((item) => {
          totalPrice += item;
        });
      
        return totalPrice;
      }

      task 7
      const filterArray = (numbers, value) => {
        const filteredNumbers = [];
      
        numbers.forEach((number) => {
          if (number > value) {
            filteredNumbers.push(number);
          }
        });
      
        // Пиши код выше этой строки
        return filteredNumbers;
      }

      task 8
      const getCommonElements = (firstArray, secondArray) => {
        const commonElements = [];
      
        firstArray.forEach((element) =>{
          if (secondArray.includes(element)) {
            commonElements.push(element);
          }
        });
      
        // Пиши код выше этой строки
        return commonElements;
      }

      task 9
      function changeEven(numbers, value) {
        // Пиши код ниже этой строки
      let newArray = [];
        numbers.forEach(number =>{
          if (number % 2 === 0) {
            newArray.push(number + value);
          } else if (number % 2 !== 0) {
            newArray.push(number);
          }
          
        });
      return newArray;
        // Пиши код выше этой строки
      }

      task 10
      const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

     task 11
     const books = [
      { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
      { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
      { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
      { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
      { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
    ];
    // Пиши код ниже этой строки
    
    const titles = books.map(book => book.title);

    task 12
    const books = [
      {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое']
      },
      {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика']
      },
      {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика']
      }
    ];
    // Пиши код ниже этой строки
    
    const genres = books.flatMap(book => book.genres);

    task 13

    const getUserNames = users => {
      return users.map(user => user.name)  
   
     };

     task 14

     const getUserEmails = users => {
      return users.map(user => user.email)  
     
       };

      task 15
      const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

task 16
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

task 17
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

task 18
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color)
 
 };

 task 19
 const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge)
 };

 task 20
 const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName))
};

task 21
const getFriends = (users, friends) => {
  const  allFriends = users.flatMap(user => user.friends)
  
  return allFriends.filter((friend, index, users) => users.indexOf(friend) === index)
   
 };

 task 22
 const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true) 
 };

 task 23
 const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false) 
};

task 24
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

task 25
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email) 
};

task 26
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((element) => element % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((element) => element % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((element) => element % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((element) => element % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((element) => element % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((element) => element % 2 === 0);

task 27
const isEveryUserActive = (users) => {
  return users.every(user => user.isActive) 
};

task 28
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

task 29
const isAnyUserActive = users => {
  return users.some(user => user.isActive) 
};

task 30
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, player, index, playtimes) => {
return previousValue + player
});

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

task 31
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total, player, index, players) => {
return total + player.playtime / player.gamesPlayed
}, 0);

task 32
const calculateTotalBalance = users => 
   users.reduce((total, value, index, users) => (total + value.balance), 0) 
;

task 33
const getTotalFriendCount = users => users.reduce((allfriend, user) => {
  allfriend.push(...user.friends);
  return allfriend;
}, []).length;

task 34
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

task 35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);

task 36
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

task 37
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a,b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a,b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a,b) => b.rating - a.rating);

task 38
const sortByAscendingBalance = users => {
  return [...users].sort((a,b) => a.balance - b.balance) 
};

task 39
const sortByDescendingFriendCount = users => {
  return [...users].sort((a,b) => b.friends.length - a.friends.length) 
 };

 task 40
 const sortByName = users => {
  return [...users].sort((a,b) => a.name.localeCompare(b.name)) 
};

task 41
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books].filter((book, index, books) => book.rating > MIN_BOOK_RATING).map((book) => book.author).sort((a, b) => a.localeCompare(b));

task 42
const getNamesSortedByFriendCount = users => {
  return [...users].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name) 
 };

 task 43
 const getSortedFriends = users => {
  return [...users].flatMap((user) => user.friends).filter((user, index, users) => users.indexOf(user) === index).sort((a, b) => a.localeCompare(b))
};

task 44
const getTotalBalanceByGender = (users, gender) => {
  return [...users].filter((user, index, users) => user.gender === gender).reduce((acc, value) => (acc + value.balance), 0) 
};