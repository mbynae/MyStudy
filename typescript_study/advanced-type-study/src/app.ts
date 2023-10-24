type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface Admin {
//     name: string;
//     privileges: string[];
// }

// interface Employee {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

const person1: ElevatedEmployee = {
    name: '직원 이름',
    privileges: ['프론트엔드'],
    startDate: new Date(),
};

console.log(person1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
const example1: Universal = 10;
// const example2: Universal = '문자열';
// const example3: Universal = true;
