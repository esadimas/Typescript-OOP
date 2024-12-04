describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {
      this.name = name;
    }
  }

  it("should support", () => {
    const person = new Person("Dimas");
    console.log(person.name);

    person.name = "Dwi";
    console.log(person.name);
  });
});
