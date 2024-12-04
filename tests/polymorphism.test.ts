describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee) {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.log(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello Manager ${manager.name}`);
    } else {
      console.log(`Hello employee ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee) {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello Manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.log(`Hello VP ${vp.name}`);
    } else {
      console.log(`Hello employee ${employee.name}`);
    }
  }

  it("should support", () => {
    let employee: Employee = new Employee("Dimas");
    console.log(employee);

    employee = new Manager("Dimas");
    console.log(employee);

    employee = new VicePresident("Dimas");
    console.log(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Dimas"));
    sayHello(new Manager("Dwi"));
    sayHello(new VicePresident("Dewi"));
  });

  it.only("should support method parameter polymorphism wrong", () => {
    sayHelloWrong(new Employee("Dimas"));
    sayHelloWrong(new Manager("Dwi"));
    sayHelloWrong(new VicePresident("Dewi"));
  });
});
