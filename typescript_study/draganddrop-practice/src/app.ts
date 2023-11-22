class ProductInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    importNode2: HTMLFormElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild as HTMLFormElement;
        this.importNode2 = this.templateElement.content.cloneNode(true)! as HTMLFormElement;
        this.attach();
    }

    private attach() {
        console.log(this.importNode2);
        // this.hostElement.insertAdjacentElement('afterbegin', this.element);
        // this.hostElement.insertAdjacentElement('afterbegin', this.importNode2);
        // this.hostElement.append(this.importNode2);
        this.hostElement.append(this.templateElement.content);
    }
}

const prjInput = new ProductInput();
