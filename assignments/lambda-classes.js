// CODE here for your Lambda Classes

class Person{
    constructor(PersonAttributes){
        this.name = PersonAttributes.name,
        this.age = PersonAttributes.age,
        this.location = PersonAttributes.location;
    };
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}`
    };
};

class Instructor extends Person{
    constructor(InstructorAttributes){
        super(InstructorAttributes);
        this.specialty = InstructorAttributes.specialty,
        this.favLanguage = InstructorAttributes.favLanguage,
        this.catchPhrase = InstructorAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(StudentAttributes){
        super(StudentAttributes);
        this.previousBackground = StudentAttributes.previousBackground,
        this.className = StudentAttributes.className,
        this.favSubjects = StudentAttributes.favSubjects
    };
    listsSubjects(){
        this.favSubjects.map(input => console.log(input));
    };
    PRAssignment(subject) {
        `return ${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
};

class ProjectManager extends Instructor{
    constructor(PMAttributes){
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName,
        this.favInstructor = PMAttributes.favInstructor;
    };
    standUp(channel){
        return `${this.name} annouces to ${channel}, @channl standy times!`;
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    };
};

const ben = new Instructor({
    name:"Ben",
    location: "Cleveland",
    age: 32,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Machine Learning",
    catchPhrase: "What's cookin?"
});

const kevin = new Instructor({
    name:"Kevin",
    location: "Milwaukee",
    age: 25,
    gender: "male",
    favLanguage: "C++",
    specialty: "Game Dev",
    catchPhrase: "Are you cookin?"
});

const chanel = new Student({
    name:"Chanel",
    location: "California",
    age: 19,
    gender: "female",
    favSubjects: ["History", "Math"],
    grade: 99
});

const karen = new Student({
    name:"Karen",
    location: "New York",
    age: 22,
    gender: "female",
    favSubjects: ["French", "Science"],
    grade: 98
});

const sean = new ProjectManager({
    name: "Sean",
    location: "Maine",
    age: 40,
    gender: "male",
    gradClassName: "Web200"
});

const kate = new ProjectManager({
    name: "Kate",
    location: "Seattle",
    age: 34,
    gender: "female",
    gradClassName: "Web199"
});

console.log(ben.speak());
console.log(kevin.demo("HTML, CSS, JS"));
console.log(kevin.grade(chanel,"99"));
console.log(chanel.listsSubjects());
console.log(chanel.PRAssignment("Javascript V"));
console.log(karen.sprintChallenge("Angular.js"));
console.log(sean.standUp("Web200"));
console.log(kate.debugsCode(karen, "React"));
