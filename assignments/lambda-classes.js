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
}

class Student extends Person {
  constructor(atts) {
    super(atts);
    this.previousBackground = atts.previousBackground;
    this.className = atts.className;
    this.favSubjects = atts.favSubjects;
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
}

class ProjectManager extends Instructor {
  constructor(atts) {
    super(atts);
    gradClassName = atts.gradClassName;
    favInstructor = atts.favInstructor;
  }
  standup(channel) {
    console.log(`${this.name} announces to ${channel}: @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}
