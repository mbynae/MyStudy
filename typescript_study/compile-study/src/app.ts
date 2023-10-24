// type AddFn = (n1: number, n2: number) => number;
interface AddFn {
    (n1: number, n2: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

console.log(add(10, 20));

interface Named {
    readonly name: string;
}

interface Age {
    age: number;
}

interface Greetable extends Named, Age {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Greetable;

user1 = new Person('이름');
// user1.name = '바꿈'; //readonly 속성 때문에 변경 불가

user1.greet('이녀석의 이름은:');
console.log(user1);
