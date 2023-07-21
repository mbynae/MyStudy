// const person: {
//     name: String;
//     age: Number;
// } = {
//     name: '이름',
//     age: 30,
// };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: '이름',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };
// person.role.push('admin');
// person.role = ['admin', 1];
// person.role = [1, 'admin', 'test'];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 5,
    READ_ONLY = 'READ_ONLY',
    AUTHOR = '100',
}

const person = {
    name: '이름',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
    console.log('어드민');
}

console.log(Role.ADMIN);
console.log(Role[5]);
// let favoriteActivirities: string[];
// favoriteActivirities = ['Sports'];

// for (const hobby of person.hobbies) {
//     console.log(hobby);
// }
