describe("Visibility", () => {
  class Counter {
    protected counter: number = 0;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
        this.counter += 2
    }
  }

  it("should support private", () => {
    const counter = new DoubleCounter();
    counter.increment()
    counter.increment()
    counter.increment()

    console.log(counter.getCounter());
    
  });
});
