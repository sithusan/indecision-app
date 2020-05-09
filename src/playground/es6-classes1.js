class Person {
    constructor(name = 'Anynomous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Mingalar Par, I am ${this.name} !`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;

    }
    
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let getGreeting = super.getGreeting();
        if(this.homeLocation){
            getGreeting += ` I am visiting from ${this.homeLocation}`;
        }
        return getGreeting;
    }
}

const person = new Traveller('Sayr G',20,'Kanma');
console.log(person.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());