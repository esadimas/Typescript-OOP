describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "John Wick");
    customer.age = 20
    console.log(customer.id);
    console.log(customer.name);
    console.log(customer.age);
    console.log(customer);
    
  });

  it.only("should can have methods", () => {
    const customer = new Customer(1, "Dimas")
    customer.sayHello("Budi")
  })
});
