const names = ['이름1', '이름2']; // string[]
//const names2: Array = []; // Array<T> 타입으로 T에 들어갈 한개 이상의 인자가 필요하다는 애러가 발생
const names2: Array<string> = []; // string[] 과 똑같은 타입
names[0].split(''); //배열의 요소가 문자열인걸 알기 때문에 에러 발생X

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('문자열이 입력됨!');
    }, 2000);
});

promise.then((data) => {
    // Promise에 제네렉으로 타입을 명시해주지 않으면 unknown 타입이 배정되기 때문에 split 메서드에 타입 에러가 발생함
    data.split('');
});
