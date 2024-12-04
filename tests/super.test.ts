describe("Super Constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;
    constructor(name: string, deparment: string) {
      super(name);
      this.department = deparment;
    }
  }

  it("should support", () => {
    const employee = new Employee("Dimas", "Tech")
    console.log(employee.name);
    console.log(employee.department);
  })

  
});
