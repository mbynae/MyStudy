abstract class Department {
    static fiscalYear = 2023;
    // private readonly id: string;
    // name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
        // console.log(this.fiscalYear);
        console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract discribe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfomation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admin: string[] = [];
    constructor(id: string, admin: string[]) {
        super(id, 'IT');
        this.admin = admin;
    }

    discribe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(id: string, private report: string[]) {
        super(id, 'Accounting');
        this.lastReport = report[0];
    }

    static getInstance() {
        if (!AccountingDepartment.instance) {
            this.instance = new AccountingDepartment('d2', []);
        }
        return this.instance;
    }

    discribe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }

    // get mostRecentReport() {
    //     if (this.lastReport) return this.lastReport;
    //     throw new Error('no report');
    // }

    // set mostRecentReport(value: string) {
    //     if (!value) throw new Error('유효한 값을 입력해주세요.');
    //     this.addReport(value);
    // }

    addEmployee(name: string) {
        if (name === '직원1') return;
        this.employees.push(name);
    }

    addReport(text: string) {
        this.report.push(text);
        this.lastReport = text;
    }

    printReport() {
        console.log(this.report);
    }
}

const employee1 = Department.createEmployee('새직원');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['관리자']);
it.addEmployee('직원1');
it.addEmployee('직원2');
it.discribe();
it.printEmployeeInfomation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

// accounting.mostRecentReport = '최근 입력된 report';
// accounting.addReport('에러가 발생했습니다.');
// console.log(accounting.mostRecentReport);

accounting.addEmployee('직원1');
accounting.addEmployee('직원2');
// accounting.printReport();
// accounting.printEmployeeInfomation();
accounting.discribe();

// const AccountingCopy = { name: 'dummy', discribe: Accounting.discribe };
// AccountingCopy.discribe();
