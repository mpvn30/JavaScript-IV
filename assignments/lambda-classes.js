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
