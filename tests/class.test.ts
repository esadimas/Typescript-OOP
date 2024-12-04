describe("Class", () => {
  class Customer {
    constructor() {
      console.log("Create new customerr");
    }
  }

  class Order {}

  it("it should can create class", () => {
    const customer: Customer = new Customer();
    const order: Order = new Customer();
  });

  it("it should can create constructors", () => {
    new Customer();
    new Customer();
  });


});
