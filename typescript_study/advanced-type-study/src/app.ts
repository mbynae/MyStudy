// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const person1: ElevatedEmployee = {
//     name: '직원 이름',
//     privileges: ['프론트엔드'],
//     startDate: new Date(),
// };

// console.log(person1);

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;
// const example1: Universal = 10;

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    //console.log(animal.flyingSpeed); //새인지 말인지 몰라 에러가 발생

    // if('flyingSpeed' in animal){ //기존의 in 타입가드로 입력 가능
    //     console.log(animal.flyingSpeed);
    // }

    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            speed = 0;
            break;
    }
    console.log(`${animal.type} is speed: ${speed}`);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 20 });
