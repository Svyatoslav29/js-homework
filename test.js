function Person(obj) {
const {firstName, lastName, age, gender, interests } = obj;
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.gender = gender;
this.interests = interests;
}

Person.prototype.greeting = function() {
    console.log('Привет я ${this.firstName} ${this.lastName}');
};

Person.prototype.bio = function () {
    console.log('Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}');
};

function Student(obj) {
    const{ subject } = obj;
    Person.call(this, obj);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
    console.log('I am student');
};

const student1 = new Student({
    firstName: "Buddy",
    lastName: "Gun",
    age: 13,
    gender: "male",
    interests: "diving",
    subject: "Biology",
});

console.log('student1', student1);
student1.greeting();

const getUsersWithFriend = (users, friendName) => {
    return users.filter((user) => user.friends === friendName)
  };

  console.log(getUsersWithFriend);

  