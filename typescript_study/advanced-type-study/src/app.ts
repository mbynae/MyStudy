// type Admin = {
//     name: string;
//     privileges: string[];
// };

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// interface Admin {
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

// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }
// console.log(add('1', 10));

// type UnKnownEmployee = Admin | Employee;

// function printEmployeeInformation(emp: UnKnownEmployee) {
//     console.log('이녀석 이름은: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('이녀석의 직함은: ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log('입사 날짜는: ' + emp.startDate);
//     }
// }
// printEmployeeInformation({ name: '일개 사원', startDate: new Date() });

// class Car {
//     drive() {
//         console.log('현재 자동차 코스는...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('현재 화물차 목적지는...');
//     }

//     loadCago(amount: number) {
//         console.log(`${amount} 만큼 수송중`);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();

//     if (vehicle instanceof Truck) {
//         vehicle.loadCago(1000);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);

// 타입스크립트에서 p 태그가 HTMLParagraphElement | null 이라는 것을 인식
// !는 해당 요소가 null이 아니라는 것을 지정
// const paragraph = document.querySelector('p')!;
// paragraph.innerText = '텍스트 입력 잘됨';

// // 타입스크립트는 id나 class의 요소가 무엇인지 모르기 때문에 HTMLElement | null 로 나타냄
// const paragraphId = document.getElementById('text-output')!;

// //text-input가 input 태그인것을 모르기 떄문에 에러가 발생
// const inputText = document.getElementById('text-input')!;
// inputText.value = '텍스트입력';

// 요소 앞에 <>꺽쇠를 사용해 어떤 타입인지 인지를 시켜주면 해결
// const inputText = <HTMLInputElement>document.getElementById('text-input')!;
// inputText.value = '텍스트입력';

// 요소 뒤에 as 타입 으로 입력해 동일한 결과를 낼 수 있다.
// 리액트 같이 꺽쇠가 다른 요소로 사용될 수 있을 때 이 방법으로 해결이 가능함
// const inputText2 = document.getElementById('text-input')! as HTMLInputElement;
// inputText2.value = '텍스트입력';



interface ErrorContainer {
    // id: string;
    [prop: string]: string;
}

const errorBag:ErrorContainer = {
    // email: 1, //문자열이 아니라서 에러가 발생함
    // 1: '이메일이 아닌데?', //key의 숫자는 문자열로 취급할 수 있음
    email: '이메일이 아닌데?',
    userName: '이름은 한글로 적어야겠지?',
}

const form = document.getElementById('form') as HTMLFormElement;
const idText = document.getElementById('text-input') as HTMLInputElement;
const nameText = document.getElementById('name-input') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;
const regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const regExpName = /^[가-힣]*$/;

if (form) {
    form.addEventListener("submit", (e)=>{
        e.preventDefault();


        if(!regExpEmail.test(idText.value)){
            alert(errorBag.email);
            return;
        };
        if(!regExpName.test(nameText.value)){
            alert(errorBag.userName);
            return;
        }
        alert('로그인 성공!');
    });
}


