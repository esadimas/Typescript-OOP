describe("Inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support ", () => {
    const employee = new Employee("Dimas");
    console.log(employee.name);

    const manager = new Manager("Dwi");
    console.log(manager.name);

    const director = new Director("Arif");
    console.log(director.name);
  });

});
