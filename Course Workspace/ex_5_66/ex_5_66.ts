export{};
class Car {
    public name : string;
    public acceleration : number = 0;

    constructor(name:string){
        this.name = name;
    };

    public honk (){
        console.log("Toooooooooot!");
    };

    public accelerate(speed: number){
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

class baseObject {
    width : number = 0;
    length : number = 0;
}

class Rectangle extends baseObject {
    public calcSize () {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

class Person {
    private _firstName : string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(name: string) {
        if(name.length > 3) {
            this._firstName = name;
        }
        else {
            this._firstName = ""
        }
    }
}

const person = new Person();

console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);