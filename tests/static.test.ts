describe("Static Properties", () => {
  class Configuration {
    static NAME: string = "Belajar ts oop";
    static VERSION: number = 2.03;
    static AUTHOR: string = "Esa Dimas Aditya";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (let i = 0; i < values.length; i++) {
        total += values[i];
      }

      return total;
    }
  }

  it("should support", () => {
    console.log(Configuration.NAME);
    console.log(Configuration.VERSION);
    console.log(Configuration.AUTHOR);
  });

  it.only("should support static method", () => {
    console.log(MathUtil.sum(1, 2, 3));
  });
});
