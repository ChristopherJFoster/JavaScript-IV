// CODE here for your Lambda Classes

class Person {
  constructor(atts) {
    this.name = atts.name;
    this.age = atts.age;
    this.location = atts.location;
    this.gender = atts.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}. I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(atts) {
    super(atts);
    this.specialty = atts.specialty;
    this.favLanguage = atts.favLanguage;
    this.catchPhrase = atts.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
  gradeAdjust(student) {
    let adjustment = Math.floor(Math.random() * Math.floor(10)) + 1; // Generates a grade adjustment between 1 and 10
    adjustment *= Math.floor(Math.random() * 2) === 1 ? 1 : -1; // Randomly determines whether the grade adjustment will be positive or negative
    student.grade += adjustment; // Applies the grade adjustment
    if (student.grade < 1) {
      student.grade = 1; // Stops the student's grade from being lower than 1
    }
    if (student.grade > 100) {
      student.grade = 100; // Stops the student's grade from being higher than 100
    }
  }
}

class Student extends Person {
  constructor(atts) {
    super(atts);
    this.previousBackground = atts.previousBackground;
    this.className = atts.className;
    this.favSubjects = atts.favSubjects;
    this.grade = Math.floor(Math.random() * Math.floor(100)) + 1; // Gives each student starting grade from 1 to 100
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
  graduate() {
    // Generates a different message based on how close the student is to qualifying for graduation
    if (this.grade > 70) {
      console.log(
        `Congratulations, ${
          this.name
        }! You're ready to graduate from Lambda School.`
      );
    } else if (this.grade > 50) {
      console.log(
        `You're not quite ready to graduate, ${
          this.name
        }. Keep up the hard work!`
      );
    } else {
      console.log(
        `You've got some work ahead of you before you can graduate, ${
          this.name
        }. Coding can be difficult, but Lambda School is behind you all the way!`
      );
    }
  }
}

class ProjectManager extends Instructor {
  constructor(atts) {
    super(atts);
    this.gradClassName = atts.gradClassName;
    this.favInstructor = atts.favInstructor;
  }
  standup(channel) {
    console.log(`${this.name} announces to ${channel}: @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const instructor0023 = new Instructor({
  name: "Sargento",
  age: 29,
  location: "Salt Lake City",
  gender: "M",
  specialty: "front end",
  favLanguage: "CSS",
  catchPhrase: "Did I do that?"
});

const instructor0049 = new Instructor({
  name: "Claudia",
  age: 28,
  location: "The Misty Mountain",
  gender: "F",
  specialty: "back end",
  favLanguage: "JavaScript",
  catchPhrase: "You shall pass!"
});

const student1002 = new Student({
  name: "Callie",
  age: 35,
  location: "Delaware",
  gender: "F",
  previousBackground: ["psychologist"],
  className: "Web17",
  favSubjects: ["NaNs", "template literals", ".push()"],
  catchPhrase: "oKAY?" // Even though this argument object has a catchPhrase property...*
});

const student1483 = new Student({
  name: "Daniel",
  age: 32,
  location: "Delaware",
  gender: "M",
  previousBackground: ["data analyst", "soccer player"],
  className: "Web17",
  favSubjects: ["git", "box model", "flexbox"]
});

const projectManager0132 = new ProjectManager({
  name: "Jones",
  age: 31,
  location: "Tel Aviv",
  gender: "M",
  specialty: "back end",
  favLanguage: "Ruby",
  catchPhrase: "I'm gettin' too old for this!",
  gradClassName: "Web12",
  favInstructor: "Claudia"
});

const projectManager0144 = new ProjectManager({
  name: "Tams",
  age: 23,
  location: "San Juan",
  gender: "F",
  specialty: "UX",
  favLanguage: "Perl",
  catchPhrase: "You ain't seen nothin', yet...",
  gradClassName: "Web14",
  favInstructor: "Big Pete"
});

console.log(instructor0023.catchPhrase);
instructor0049.speak(); // Shows that the Instructor subclass inherits the methods of its parent class (Person)
instructor0023.grade(student1483, "JavaScript Fundamentals");
console.log("\n");
console.log(student1002); // *...we can see that the generated Student object doesn't have a catchPhrase property...
console.log(student1002.catchPhrase); // ...so trying to log catchPhrase from a Student object yields undefined.
student1483.listsSubjects();
console.log("\n");
console.log(projectManager0144.catchPhrase);
projectManager0144.standup(`Web17_${projectManager0144.name}`);
projectManager0132.debugsCode(student1483, "Preprocessing I");
console.log("\n");
console.log(student1002.grade);
projectManager0132.gradeAdjust(student1002);
console.log(student1002.grade);
console.log("\n");
console.log(student1483.grade);
student1483.graduate();
