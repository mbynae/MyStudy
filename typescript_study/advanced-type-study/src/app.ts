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

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = '값이 없습니다.';

    if (element.length === 1) {
        descriptionText = '1개의 엘리먼트';
    }
    if (element.length > 1) {
        descriptionText = element.length + '개의 엘리먼트';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['이름', '나이']));
