describe("Method overriding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }                                 
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      super.sayHello(name);
      console.log(`And, I am your manager`);
    }
  }

  it("Should support", () => {
    const employee = new Employee("budi");
    employee.sayHello("Putri");

    const manager = new Manager("Dwi");
    manager.sayHello("dimas");
  });
});
