let userInput: unknown;
let userName: string;

userInput = 5;
userInput = '이름';

// userName = userInput;

if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    // throw { message: message, code: code };
    while (true) {
        console.log(message, code);
    }
}
generateError('에러 발생', 500);
