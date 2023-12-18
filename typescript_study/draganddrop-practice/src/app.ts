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

class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects: Project[]; //배정할 프로젝트를 저장하기 위한 프로퍼티 //클래스를 타입으로 사용

    constructor(private type: 'active' | 'finished') {
        this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        this.assignedProjects = []; //프로퍼티 초기화

        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild as HTMLElement;
        this.element.id = `${this.type}-projects`;

        //프로젝트를 랜더링 하기 전 입력된 엘리먼트 추가 매서드 
        projectState.addListener((projects: Project[]) =>{
            //assignedProjects에 projects(title, description, people)를 입력
            //renderContent가 먼저 실행되기 때문에 ${this.type}-projects-list가 존재한다.
            this.assignedProjects = projects;
            this.renderProject();
        });

        this.renderContent();
        this.attach();
    }

    //project list 박스 안에 입력한 엘리먼트를 랜더링

    private renderProject(){
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        for(const prjItem of this.assignedProjects){
            const listItem = document.createElement("li");
            //클래스를 타입으로 사용해서 자동 완성 기능을 만들 수 있다.
            listItem.textContent = prjItem.title; //prjItem에 타입 자동완성이 추가됨
            listEl.appendChild(listItem);
        }
    }

    private renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`;
        this.element.querySelector('ul')!.id = listId;
    }

    private attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}

//Project Type
//2개의 리터럴 타입을 표현하기 위한 enum
enum ProjectStatus {
    Active, Finished
}

//클래스는 그 자체로 타입으로 사용할 수 있다.
class Project {
    constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus){}
}

//Listener Type
//project 인스턴스를 받아 실행하는 함수의 타입
type Listener = (items: Project[]) => void;

//Project State Management (상태관리 클래스)
//구독 패턴을 통한 입력값 저장 및 출력 방식
class ProjectState {
    private listener: Listener[] = []; // 이벤트 함수 배열
    private projects: Project[] = []; //클래스 타입을 인스턴스나 변수에 사용할 수 있다.
    private static instance: ProjectState; //싱글톤

    private constructor() {}

    //싱글톤 사용법
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    //이벤트 함수 저장
    addListener(listenerFn: Listener){
        this.listener.push(listenerFn);
    }

    addProject(title: string, description: string, numOfPeople: number) {
        //클래스 타입을 변수에 사용하는 방법
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active)
        this.projects.push(newProject);
        for(const listenerFn of this.listener){
            //배열을 복사하는 방법
            listenerFn(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance(); //싱클톤으로 인해 인스턴스 생성 불가

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
            projectState.addProject(title, desc, people); //싱글톤 인스턴스에 인자 전잘
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
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');


