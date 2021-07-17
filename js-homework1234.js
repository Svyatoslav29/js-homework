task 5
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

task 6
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = ((pricePerDroid * orderedQuantity) + deliveryFee);
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(totalPrice);

task 7 
function sayHi () {
    console.log("Hello, this is my first function!");
  };
  sayHi();

task 8 
// Change code below this line
function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
    // Change code above this line
  }
  
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);

 task 9 
 function add(a, b, c) {
    // Change code below this line
      return a + b + c;
  
    // Change code above this line
  }
  
  add(2, 5, 8); // 15
  
  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15));

task 10 
function makeMessage (name, price) {
    // Change code below this line
     const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
  };

 task 11 
 function calculateTotalPrice (orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = (orderedQuantity * pricePerItem);
  
    // Change code above this line
    return totalPrice;
  };
  
 task 12

 function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  const totalPrice = ((orderedQuantity * pricePerDroid) + deliveryFee);
  const message = `You ordered droids worth ${((orderedQuantity * pricePerDroid) + deliveryFee)} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
  
    // Change code above this line
    return message;
  }

 task 13
 function isAdult(age) {
    // Change code below this line
    const passed = (age >= 18);
  
    // Change code above this line
    return passed;
  }

  task 14 
  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = (password === 'jqueryismyjam' );
  
    // Change code above this line
    return isMatch;
  }

  task 15 
  function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }

 task 16 
 function checkStorage(available, ordered) {
    let message;
    // Change code below this line
     if (available >= ordered) { 
        message = "Order is processed, our manager will contact you.";
      } else {
        message = "Not enough goods in stock!";
      }
    // Change code above this line
    return message;
  }

  task 17 
  let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

task 18 
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
  const totalPrice = (pricePerDroid * orderedQuantity);
     if (totalPrice > customerCredits) { 
          message = `Insufficient funds!`;
        } else {
          message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
        }
    // Change code above this line
    return message;
  }

  task 19 
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { // Change this line
      message =  'Canceled by user!';
    } else if (password === 'jqueryismyjam') { // Change this line
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }

  task 20 
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  if (ordered === 0) { // Change this line
        message =  "There are no products in the order!";
      } else if (ordered > available) { // Change this line
        message = "Your order is too large, there are not enough items in stock!";
      } else {
        message = "The order is accepted, our manager will contact you";
      }
    // Change code above this line
    return message;
  }

  task 21
  function isNumberInRange(start, end, number) {
    const isInRange = (number >= start && number <= end); // Change this line
  
    return isInRange;
  }

  task 22 
  function checkIfCanAccessContent(subType) {
    const canAccessContent = (subType === "pro" || subType === "vip") ; // Change this line
  
    return canAccessContent;
  }

  task 23
  function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line
  
    return isNotInRange;
  }

  task 24
  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  }
    else if (totalSpent >= 20000 && totalSpent < 50000) {
      discount = SILVER_DISCOUNT;
    }
    else if (totalSpent >= 5000 && totalSpent < 20000) {
      discount = BRONZE_DISCOUNT;
    }
    else 
    { discount = BASE_DISCOUNT;
    }
    // Change code above this line
    return discount;
  }

  task 25
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
     message = available >= ordered ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!" ;
  
    // Change code above this line
    return message;
  }

  task 26
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  message = password === "jqueryismyjam" ? "Access is allowed" : "Access denied, wrong password!";
    // Change code above this line
    return message;
  }

  task 27
  function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { // Change this line
      case "starter" :// Change this line
        price = 0; // Change this line
        break;
  
      case "professional" : // Change this line
        price = 20; // Change this line
        break;
  
      case "organization" : // Change this line
        price = 50; // Change this line
        break;
    }
  
    // Change code above this line
    return price;
  }

  task 28
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
   case "jqueryismyjam":
      message = "Welcome!";
      break;
   
    default:
      message = "Access denied, wrong password!";
    }
  
    // Change code above this line
    return message;
  }

  task 29
  function getShippingCost(country) {
    let message;
    // Change code below this line
  switch (country) {
    case "China":
      message = "Shipping to China will cost 100 credits"
      break;
     case "Chile":
      message = "Shipping to Chile will cost 250 credits"
      break;
        case "Australia":
      message = "Shipping to Australia will cost 170 credits"
      break;
     case "Jamaica":
      message = "Shipping to Jamaica will cost 120 credits"
      break;
    default:
      message = "Sorry, there is no delivery to your country";   
  }
    // Change code above this line
    return message;
  }

  task 30
  function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
    return message;
  }

  task 31
  const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = (courseTopic.length );
const firstElement = (courseTopic [0]);
const lastElement = (courseTopic [courseTopic.length  - 1]);

// Change code above this line

!!!!!!task 32 ((??????))!!!!!!
function getSubstring(string, length) {
    const substring = string.slice (0, length) ; // Change this line
  
    return substring;
  }

!!!!!task 33 !!!!!!!
function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
  if (message.length > maxLength) {
    let messageSubString = message.slice(0, maxLength);
    result = `${messageSubString}...`;}
    else {
      result = message; }
    /// Change code above this line
    return result;
  }

  task 34
  function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Change this line
  
    return normalizedInput;
  }

  task 35
  function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
     return result;
   }

  !!!!!!!! task 36 !!!!!!!!
   function checkForSpam(message) {
    let result;
    // Change code below this line
  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')? true : false;
    
    // Change code above this line
    return result;
  }
  

//////////// MODULE 2 ////////////////

task 1
function checkAge(age) {
    if (age >= 18) { // Change this line
      return "You are an adult";
    }
  
    return "You are a minor";
  }

  task 2

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
  
    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    }
    
    return "Access denied, wrong password!" ;
    // Change code above this line
  }

  task 3
  function checkStorage(available, ordered) {
    // Change code below this line
  
    if (ordered === 0) {
     return "Your order is empty!";
    } 
    if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";}
    return "The order is accepted, our manager will contact you" ;
   
    // Change code above this line
  }

  task 4
  // Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

task 5
const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

task 6
const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

task 7
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

task 8
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

task 9
function getExtremeElements(array) {
    // Change code below this line
  const lastElement = array.pop();
  const firstElement = array.shift();
  const newArray = [firstElement, lastElement];
  return newArray;
    // Change code above this line
  }

  task 10
  function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
   words = message.split(delimeter);
    // Change code above this line
    return words;
  }

  task 11
  function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
 const messageNew = message.split(" ");
 const totalPrice = messageNew.length * pricePerWord;
   
 
 return totalPrice;
    // Change code above this line
 }

 task 12
 function makeStringFromArray(array, delimeter) {
    let string;
    // Change code below this line
  string = array.join(delimeter);
  
  
    // Change code above this line
    return string;
  }

  task 13
  return title.toLowerCase().split(' ').join('-');

  task 14
  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

task 15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

task 16
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  let tempArr = [];
  let newArray = firstArray.concat(secondArray);
  tempArr = (newArray.length > maxLength) ? newArray.slice(0, maxLength) : newArray.slice(0,
newArray.length);
  
return tempArr;
    // Change code above this line
  }
 task 17
 
 const start = 3;
const end = 7;

for (let i = start; i <=end ; i += 1) { // Change this line
  console.log(i);
}

task 18
function calculateTotal(number) {
    // Change code below this line
     let result = 0;
   for (let i = 0; i <= number; i ++ ) {
   result += i;
   }
   return result;
     // Change code above this line
   }

 task 19 
 const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i +=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

task 20 

function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  for(let num of order) {
      total += num
  }// Change code above this line
    return total;
  }

 task 21 
 function findLongestWord(string) {
    // Change code below this line
    return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  };
  
 task 22
 function createArrayOfNumbers(min, max) {
    const numbers = [];
        // Change code below this line
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
    // Change code above this line
    return numbers;
  }
  
 task 23
 function filterArray(numbers, value) {
    // Change code below this line
   const result = [];
 for (let i = 0; i < numbers.length; i +=1){
 if (numbers[i] > value){
 result.push(numbers[i]);
 }
 }
 return result;
   // Change code above this line
 }
 
 task 24
 function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];
    return fruits.includes(fruit) ? true : false ; // Change this line
  }
//   тернарный оператор:
// условие ? если оно выполнилось, то выполнится этот код (между ? и : ) : если условие не выполнилось то выполнится этот код
// в случае данной задачи
// return fruits.includes(fruit) ? true : false;
// fruits.includes(fruit) - условие
// ? true - если выполнилась проверка и фрукт найден в массиве фруктов
// : false - если фрукт не найден в массиве
 task 25

 function getCommonElements(array1, array2) {
    // Change code below this line
    const uniqueElements = [];
  for (const element of array1){
  if (array2.includes(element)) {
  uniqueElements.push(element);
  }
  }
  
  return uniqueElements;
   // Change code above this line
  }

  task 26
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  
    for (let value of order) {
      total += value;
    }
  
    // Change code above this line
    return total;
  }

  task 27
  function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
  
    for (let number of numbers) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
  
    return filteredNumbers;
    // Change code above this line
  }

  task 28
  const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

task 29
function getEvenNumbers(start, end) {
    // Change code below this line
   const numbers = [];
 for (let i = start; i <= end; i++) {
   if (i % 2 === 0) {
   numbers.push(i);
   }
 }
 
  return numbers;
     // Change code above this line
   }

 task 30
 const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

task 31
function findNumber(start, end, divisor) {
    // Change code below this line
   
  
    for (let i = start; i < end; i += 1) {
      if (i % divisor === 0) {
        return i;
      }
    }
  
    return i;
    // Change code above this line
  }

  task 32
  function includes(array, value) {
    // Change code below this line
  for(let element of array) {
  if(element === value) {
  return true;
   }
  }
    return false;
    // Change code above this line
  }

////////MODULE 3////////////

task 1
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
     rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"]  
    };

task 2
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  owner: {
  name: "Henry",
  phone: "982-126-1588",
  email:  "henry.carter@aptmail.com" 
  }
  };
  
  task 3
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line

  task 4
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];
  // Change code above this line

 task 5
 const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment["rating"];
  const aptDescr = apartment["descr"];
  const aptPrice = apartment["price"];
  const aptTags = apartment["tags"];
  // Change code above this line
  
  task 6
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = "Henry Sibola";
  apartment.tags.push("trusted");

  task 7
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {
  country: "Jamaica",
   city: "Kingston"
  };

  task 8

  const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line
name,
 price, 
image,
tags
  // Change code above this line
};

task 9
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
  
  
  // Change code above this line
};

task 10
const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line
  for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
  }

  task 11 
  const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}

task 12
function countProps(object) {
    let propCount = 0;
    // Change code below this line
  
    // Change code above this line
    return propCount = Object.keys(object).length;;
  }

  task 13

  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Change code below this line
  const keys = Object.keys(apartment);
  
  for (const key of keys) {
  values.push(apartment[key]);
  }

  task 14

  function countProps(object) {
    // Change code below this line
    let propCount = 0;
  const keys = Object.keys(object);
    for (const key of keys) {
    }
    return Object.keys(object).length;
    // Change code above this line
  }

  task 15
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  // Change code below this line
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);

  task 16
  function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
//   const keys = Object.keys(salaries);
    for (let salary of Object.values(salaries)) {
    totalSalary += salary;
    }
    // Change code above this line
    return totalSalary;
  }

  task 17
  const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  for(let color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
  }

  task 18
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    // Change code below this line
    for (let product of products) {
     if  (product.name === productName)
    return product.price;
      }
  return null;
     
    // Change code above this line
  }

  task 19
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Change code below this line
  const arr = [];
    for (const product of products) {
      if (product[propName]) {
      arr.push(product[propName])
      }
    }
    return arr;
    // Change code above this line
  }

  task 20
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
  let total = 0;
    for (const product of products){
      for (const key in product){
        if (product.name === productName)
          total = product.price * product.quantity
      }
    }
  return total;
    // Пиши код выше этой строки
  }

  task 21
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  
  const {yesterday, today, tomorrow} = highTemperatures;
  
  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;

  task 22

  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  
  const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
  // Change code above this line
  const meanTemperature = (yesterday + today + tomorrow) / 3;

  task 23

  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Change code below this line
  
  const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
  // Change code above this line
  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

  task 24

  const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  
  for (const {rgb, hex} of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
  }

  task 25

  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line
  const { today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

  task 26
  // Change code below this line
function calculateMeanTemperature(forecast) {
    const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
  
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }

  task 27
  const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

task 28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

task 29
const defaultSettings = {
    theme: 'light',
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
  };
  const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
  };
  // Change code below this line
  const finalSettings = {...defaultSettings, ...overrideSettings};

  task 30
  return {category, priority, completed, ...data}
  ////////
  function makeTask(data) {
    const completed = false;
    const category = 'General';
    const priority = 'Normal';
    // Change code below this line
  const task = {completed, category, priority};
    const newtask = {...task, ...data};
    // Change code above this line
    return newtask;
  }

  task 31
  // Change code below this line
function add(...args) {
    let total = 0;
    for (let arg of args) {
    total += arg;
    }
    return total;
    // Change code above this line
  }

  task 32
  // Change code below this line
function addOverNum(...args) {
    let total = 0;
  
    for (const arg of args) {
      if(arg > args[0]) {
      total += arg;
      }
    }
  
    return total;
    // Change code above this line
  }

  task 33
  // Change code below this line
function findMatches(number, ...args) {
    const matches = []; // Don't change this line
     for (let arg of args) {
       if (number.includes(arg)) {
         matches.push(arg);
       }
     }
    // Change code above this line
    return matches;
  }

  task 34
  const bookShelf = {
    // Change code below this line
    books: ['The last kingdom', 'The guardian of dreams'],
    getBooks() {
      return 'Returning all books';
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
      return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
      return `Updating book ${oldName} to ${newName}`;
    }
    // Change code above this line
  };

  task 35
  const bookShelf = {
    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
    updateBook(oldName, newName) {
      // Change code below this line
      const bookIndex = this.books.indexOf(oldName);
      this.books.splice(bookIndex, 1, newName);
      return this.books;
      // Change code above this line
    },
  };

  task 36
  const atTheOldToad = {
    // Change code below this line
    potions: []
    // Change code above this line
  };

  task 37
  const atTheOldToad = {
    // Change code below this line
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    // Change code above this line
    getPotions() {
    return ['Speed potion', 'Dragon breath', 'Stone skin']
    }
  };

  task 38
  const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    addPotion(potionName) {
      this.potions.push(potionName)
      // Change code below this line
      // Change code above this line
    },
  };

  task 39

  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    removePotion(potionName) {
        let ax
        if ((ax = this.potions.indexOf(potionName)) !== -1) {
            this.potions.splice(ax, 1)
        }
        return this.potions
    },
  };

  const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    updatePotionName(oldName, newName) {
      let index = this.potions.indexOf(oldName)
      if (index !== -1) {
        this.potions[index] = newName
      }
    },
  };

  
  const atTheOldToad = {
    potions: [
      { name: 'Speed potion', price: 460 },
      { name: 'Dragon breath', price: 780 },
      { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      if (this.potions.includes(newPotion)) {
        return `Potion ${newPotion.name} is already equipped!`;
      }
  
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      // ["Speed potion", ...].indexOf()
      const potionIndex = this.potions.map(e => e.name).indexOf(potionName);
  
      if (potionIndex === -1) {
        return `Potion ${newPotion.name} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.map(e => e.name).indexOf(oldName);
  
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
      
      const oldPotion = this.potions[potionIndex];
  
      this.potions.splice(potionIndex, 1, {
        price: oldPotion.price,
        name: newName,
      });
    },
  };

  /////
  task 41
  const atTheOldToad = {
    potions: [
      { name: 'Speed potion', price: 460 },
      { name: 'Dragon breath', price: 780 },
      { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      (!this.potions.includes(newPotion) && this.potions.push(newPotion))
    },
    removePotion(potionName) {
      (i = this.potions.map(e => e.name).indexOf(potionName)) > -1 && this.potions.splice(i, 1)
    },
    updatePotionName(oldName, newName) {
      (i = this.potions.map(e => e.name).indexOf(oldName)) > -1 && (this.potions[i].name = newName)
    },
  };
  
  ///////// MODULE 4 /////////////

  task 1
  function makePizza() {
    return 'Ваша пицца готовится, ожидайте.';
  }
  // Пиши код ниже этой строки
  
  const result = makePizza();
  const pointer = makePizza;

  task 2
  function deliverPizza(pizzaName) {
    return `Доставляем пиццу ${pizzaName}.`;
  }
  
  function makePizza(pizzaName) {
    return `Пицца ${pizzaName} готовится, ожидайте...`;
  }
  
  // Пиши код ниже этой строки
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  } 
  task 3
  function makePizza(pizzaName, callback) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    callback(pizzaName);
  }
  
  makePizza('Роял гранд', function deliverPizza(pizzaName) {
    console.log(`Доставляем пиццу ${pizzaName}.`);
  });
  // Пиши код ниже этой строки
  
  makePizza('Ультрасыр', function eatPizza(pizzaName) {
    console.log(`Едим пиццу ${pizzaName}.`);
  });

  task 4
  const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
      order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) 
      {
        return onSuccess(pizzaName);
      }
      return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
    },
  };
  // Пиши код выше этой строки
  
  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }
  
  // Вызовы метода с колбэками
  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
  pizzaPalace.order('Биг майк', makePizza, onOrderError);
  pizzaPalace.order('Венская', makePizza, onOrderError);

  task 5
  const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    // Пиши код ниже этой строки
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `В ассортименте нет пиццы с названием «${pizzaName}».`;
      }
  
      return `Заказ принят, готовим пиццу «${pizzaName}».`;
    },
    // Пиши код выше этой строки
  };

  task 6
  const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Пиши код ниже этой строки
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Пиши код выше этой строки
  };
  
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

  task 7
  const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
  ];
  
  // Пиши код ниже этой строки
  function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
  }
  
  const messages = [];
    for (let i = 0; i<orders.length; i+=1){
    let result = composeMessage.call(orders[i],i+1);
    messages.push(result)
   }

   task 8

   const orders = [
    { email: "solomon@topmail.ua", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "jacob@mail.com", dish: "Taco" },
  ];
  
  // Пиши код ниже этой строки
  function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
  }
  
  const messages = [];
  for (let i = 0; i < orders.length; i++) {
    const msg = composeMessage.apply(orders[i], [i + 1]);
    messages.push(msg);
  }

  task 9
  const pizzaPalace = {
    company: 'Pizza Palace',
  };
  
  const burgerShack = {
    company: 'Burger Shack',
  };
  
  function composeMessage(customerName) {
    return `${customerName}, всегда рады вас видеть в «${this.company}».`;
  }
  // Пиши код ниже этой строки
  
  const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
  const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
  
  const burgerShackComposer = composeMessage.bind(burgerShack);
  const burgerShackMessage = burgerShackComposer('Поли');

  task 10
  const service = {
    mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
      this.mailingList.push(email);
      return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
      this.mailingList = this.mailingList.filter((e) => e !== email);
      return `Почта ${email} удалена из рассылки.`;
    },
  };
  
  function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
  }
  
  const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
  console.log(firstInvoke);
  // Почта kiwi@mail.uk добавлена в рассылку.
  
  console.log(service.mailingList);
  /* ['mango@mail.com', 
      'poly@hotmail.de', 
      'ajax@jmail.net', 
      'kiwi@mail.uk']*/
  const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
  console.log(secondInvoke);
  // Почта poly@hotmail.de удалена из рассылки.
  
  console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


