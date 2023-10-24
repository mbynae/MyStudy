interface Named {
    readonly name?: string;
    outputName?: string; //옵셔널 체이닝으로 선택적 변수를 지정 가능
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string; //클래스에도 옵셔널체이닝 가능
    age = 30;

    //매개변수에 옵셔널체이닝 시 초기값이 undefined로 지정됨
    //name:string = '' 형태로 초기값을 지정해주는거도 가능
    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        } else {
            console.log('Hi');
        }
    }
}

let user1: Greetable;

user1 = new Person();
//user1.name = '바꿈'; //readonly 속성 때문에 변경 불가

user1.greet('이녀석의 이름은:');
console.log(user1);
