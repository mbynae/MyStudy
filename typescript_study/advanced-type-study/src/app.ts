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

// interface ErrorContainer {
//     // id: string;
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     // email: 1, //문자열이 아니라서 에러가 발생함
//     // 1: '이메일이 아닌데?', //key의 숫자는 문자열로 취급할 수 있음
//     email: '이메일이 아닌데?',
//     userName: '이름은 한글로 적어야겠지?',
// };

// const form = document.getElementById('form') as HTMLFormElement;
// const idText = document.getElementById('text-input') as HTMLInputElement;
// const nameText = document.getElementById('name-input') as HTMLInputElement;
// const button = document.getElementById('button') as HTMLButtonElement;
// const regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
// const regExpName = /^[가-힣]*$/;

// if (form) {
//     form.addEventListener('submit', e => {
//         e.preventDefault();

//         if (!regExpEmail.test(idText.value)) {
//             alert(errorBag.email);
//             return;
//         }
//         if (!regExpName.test(nameText.value)) {
//             alert(errorBag.userName);
//             return;
//         }
//         alert('로그인 성공!');
//     });
// }

// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

// type Combinable = string | number;

// //함수 위에 함수 오버로드를 작성해서 매개변수 타입에 따른 결과 타입을 명시해줌
// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// //함수 오버로드에 의해 string이 return 되는 것을 인지 (string (+3 overloads) 으로 표시됨)
// const result = add('이름', '나이');

// //string이 반환되는 것을 알기 떄문에 에러가 발생하지 않는다.
// const divider = result.split('');

// const result2 = add(1, 2); //return 타입: number

//옵셔널 체이닝을 통해 선택적으로 타입을 지정할 수 있다.
//?로 나타내며, 해당 속성이 없어도 에러가 발생하지 않음
// type TypeUserData = {
//     id: string;
//     name: string;
//     age: number;
//     job?: { title: string; description?: string };
// };

// const userData: TypeUserData = {
//     id: '아이디',
//     name: '이름',
//     age: 30,
//     job: { title: '개발자' },
// };

// //옵셔널 체이닝이 적용돤 속성은 undefined일 가능성이 있기 때문에 ?를 적용해줘야 에러가 발생하지 않는다.
// //job?: { title: string, description: string | undefined} | undefind
// console.log(`이녀석의 신상정보는 ${userData.id} ${userData.name} ${userData.age} ${userData.job?.title} ${userData.job?.description}`);


// function UserInput(input?: string | number | boolean){
//     // ||는 false 값이 아닐때만 입력 값을 출력해준다.
//     // 따라서 빈 문자열이나 숫자 0, false 값을 그대로 출력할 수가 없다. 
//     return input || 'default value';
// }

// function UserInput(input?: string | number | boolean){
//     // null 병합 연산자는 null이나 undefined이 아닐 때만 입력 값을 출력해준다.
//     // 그래서 false값을 갖는 값도 그대로 출력이 가능하다.
//     return input ?? 'default value';
// }
// console.log(UserInput(0));


//시퀸스1
// let text1 = '문자열 텍스트1'; //ts가 string으로 추론
// const text2 = '문자열 텍스트2' //ts가 '문자열 텍스트2'라는 리터럴 타입을 추론
// const obj = { //각 객체값에 해당하는 객체 타입을 추론
//     name: '이름',
//     age: 30,
//     job: {title: '개발자', description: '코딩 노예'}
// };
// function fn(x: number, y: number): {xValue:number, yValue:number} {
//     return {xValue: x, yValue: y};
// };

// //타입에 값을 넣으면 에러가 발생
// // let exampleOutput:text = '예시 문자열';

// //typeof 값을 넣으면 추론된 해당 타입이 된다. (string)
// let exampleOutput1: typeof text1 = '예시 문자열1';

// //리터럴 타입과 일치하는 '문자열 텍스트2'가 아니면 에러발생
// //let exampleOutput2: typeof text2 = '예시 문자열2'; 

// // 타입과 값은 다르기 때문에 타입에 값을 입력하면 안된다.
// //type P = text1; //에러
// type p = typeof text1; //정상

// //객체의 값을 추론해 타입으로 입력했으므로 정상 작동
// const exampleObj: typeof obj = {
//     name: '아무나',
//     age: 100,
//     job: {title: '무직백수', description: '맨날 놀기만 한데요.'}
// }

// //(x: number, y: number) => {xValue: number; yValue: number;} 타입이 입력됨
// type fnType = typeof fn;

// //잘 작동된다. fnType 대신 typeof fn를 넣어도 정상 작동
// const exampleFn:fnType = (x, y) => {
//     return {xValue: x, yValue: y};
// }
// exampleFn(10, 3);


// //시퀸스2
// type returnGeneric<T> = T;
// //제네릭 안에 값을 넣으면 에러 발생
// // type fnGeneric = returnGeneric<obj>

// // typeof로 추론하게 하면 정상 작동
// type fnGeneric = returnGeneric<typeof obj>

// //클래스는 클래스 자체가 객체 타입이 될 수 있으므로 typeof가 필요없다.
// class TypeClass {
//     constructor(public name: string, public age: number){}
// }
// const exampleClass:TypeClass = {
//     name: '이름',
//     age: 30
// }

// type Obj = {
//     color: string,
//     count: number,
//     array: string[],
//     object: {
//         name: string,
//         age: number
//     },
//     func: ()=>void
// };
// //P의 타입은 Obj의 키를 리터럴 타입으로 모아 놓은 유니언 타입이 된다.
// type Union = keyof Obj;

// //각각 유니언 타입만 입력 가능
// const color:Union = 'color';
// const count:Union = 'count';
// const object:Union = 'object';
// const func:Union = 'func';
// //객체안의 속성은 입력 불가능
// //const name: Union = 'object.name'

// /////

// // 인덱스 시그니처로 key에 타입을 입력하면 keyof 타입은 해당 인덱스 타입이 된다.
// type Obj2 = {[key: string]: unknown};
// type exObj2 = keyof Obj2; // number 타입 배정
// const key:exObj2 = 2;

// /////

// const obj = {
//     red: '빨간색',
//     green: '초록색',
//     blue: '파란색',
//     count: 3,
// }
// //keyof와 typeof를 조합하면 객체의 key를 리터럴 타입으로 모은 유니언 타입이 된다. 
// type Color = keyof typeof obj; // "count" | "red" | "green" | "blue"
// const red:Color = 'red';
// const count2: Color = 'count';

// //객체의 value의 타입을 모아서 유니언으로 만들고 싶다면 typeof 객체를 []로 묶어준다.
// type ColorType = typeof obj[keyof typeof obj]; // string | number
// /////



// //value도 리터럴 타입으로 사용하고 싶다면 상수 타입으로 만들면 된다.
// const objConst = {
//     red: '빨간색',
//     green: '초록색',
//     blue: '파란색',
//     count: 3,
// } as const

// // "빨간색" | "초록색" | "파란색" | 3
// type ColorValue = typeof objConst[keyof typeof objConst];
// const redValue:ColorValue = '빨간색';
// const countValue:ColorValue = 3;


////

// type Person = {
//     name: string,
//     age: number,
//     alive: boolean
// }
// //[]안에 타입 key를 넣어 해당 타입을 입력
// type Age = Person['age']; // number 타입

// //유니언 타입 생성
// type Union = Person['name' | 'alive']; //string | boolean

// //keyof를 활용해 사용된 모든 타입을 유니언으로 생성
// type AllUnion = Person[keyof Person]; //string | number | boolean

// // 직접 리터럴 타입으로 key를 넣어 유니언 타입 생성
// type AliveOrName = 'alive' | 'name';
// type ChoiceUnion = Person[AliveOrName]; //string | boolean

/////

// const MyArray = [
//     { name: "Alice", age: 15 },
//     { name: "Bob", age: 23 },
//     { name: "Eve", age: 38 },
// ];

// //number로 인덱싱 해서 배열 요소의 타입 추출
// type Person = typeof MyArray[number]; //number을 안붙이면 {}[] 형태가 된다.

// //동일하게 인덱싱으로 특정 key 타입 추출
// type Age = typeof MyArray[number]['age']; //number
// //or type Age = Person['age']; //number


////

type Person = {
    name: string,
    age: number,
    alive: boolean
}

//인덱싱 타입에는 무조건 타입만 올 수 있다.
const key = 'alive';
//type Alive = Person[key]; // key가 타입이 아니기 때문에 에러 발생

type Key = 'alive';
type Alive = Person[Key]; //정상 작동