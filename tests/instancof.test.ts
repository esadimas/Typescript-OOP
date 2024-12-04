describe("Instance of", () => {
  class Employee {}
  class Manager {}
  const dwi = new Employee();
  const dimas = new Manager();

  it("should have problem using typeof", () => {
    console.log(typeof dwi);
    console.log(typeof dimas);
  });

  it("should support instanceOf", () => {
    expect(dwi instanceof Employee).toBe(true);
    expect(dwi instanceof Manager).toBe(false);

    expect(dimas instanceof Manager).toBe(true);
    expect(dimas instanceof Employee).toBe(false);
  });
});
