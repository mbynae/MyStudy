// function merge(obj1: object, obj2: object) {
//     return Object.assign(obj1, obj2);
// }
// const mergeObj = merge({ name: '이름' }, { age: 30 }); // {name: 이름, age: 30};
// mergeObj.age; //타입스크립트는 merge의 결과값이 뭔지 모르기 때문에 에러가 발생한다.
// merge({ name: '이름' }, { age: 30 }) as {name: string, age: number}; // as로 타입을 명시해주면 되지만 너무 번거롭다.

//제네릭을 사용해 입력값의 타입을 지정해주면 에러 발생이 안나며, 유연하게 사용이 가능하다.
//함수 안에서 연산을 할 시 제네릭의 타입을 명시해줘야 한다.
//보통 첫번째 인자는 T, 두번째 인자는 U를 사용함
// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//     return Object.assign(obj1, obj2);
// }
// const mergeObj = merge({ name: '이름', hobby: ['sports'] }, { age: 30 });
// console.log(mergeObj.age); //타입스크립트가 결과값이 뭔지 이해하기 때문에 에러 발생X

// interface Lengthy {
//     length: number;
// }

// //T에 속하는 속성이 뭔지 알려줘서 정상 작동
// //문자열이든 배열이든 length 속성을 갖을 수 있다면 유연하게 전부 허용
// function countAndPrint<T extends Lengthy>(element: T) {
//     let descriptionText = '값이 하나도 없음';

//     //타입스크립트가 element의 속성을 모르기 때문에 length에서 타입 에러 발생
//     if (element.length === 1) {
//         descriptionText = '값이 1개 있음';
//     }
//     if (element.length > 1) {
//         descriptionText = `값이 ${element.length}개 있음`;
//     }

//     return [element, descriptionText];
// }
// console.log(countAndPrint('아무거나텍스트'));
// console.log(countAndPrint(['이름', '나이']));
//
// function extractAndConvert(obj: object, key: string) {
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    //key가 T의 key라는 것을 명시해줘서 에러가 발생하지 않는다.
    return 'value: ' + obj[key];
}
extractAndConvert({ name: '이름' }, 'name'); //정상 작동
