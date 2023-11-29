//메서드 데코레이터 사용법
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    minNumber?: number;
    maxNumber?: number;
}

function validate(validData: Validatable) {
    let isValid = true;
    if (validData.required) {
        isValid = isValid && validData.value.toString().trim().length !== 0;
    }
    if (validData.minLength != null && typeof validData.value === 'string') {
        isValid = isValid && validData.value.length >= validData.minLength;
    }
    if (validData.maxLength != null && typeof validData.value === 'string') {
        isValid = isValid && validData.value.length <= validData.maxLength;
    }
    if (validData.minNumber != null && typeof validData.value === 'number') {
        isValid = isValid && validData.value >= validData.minNumber;
    }
    if (validData.maxNumber != null && typeof validData.value === 'number') {
        isValid = isValid && validData.value <= validData.maxNumber;
    }

    return isValid;
}

class ProductInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

        this.configure();
        this.attach();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        // if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) {
        //     alert("전부 입력해주세요.");
        //     return;
        // } else {
        //     return [enteredTitle, enteredDescription, +enteredPeople];
        // }

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            minNumber: 1,
            maxNumber: 5,
        };

        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert('정확히 입력해주세요.');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInput() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearInput();
        }
    }

    private configure() {
        // this.element.addEventListener('submit', event => this.submitHandler(event));
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProductInput();

// ?는 | undefined 와 같은 유니언 타입을 나타낸다

// !== null > null만 검사
// != null > null과 undefined를 검사

// 재사용 가능한 유효성검사 만드는 방법
