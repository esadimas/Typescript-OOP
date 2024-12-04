export namespace MathUtil {
  export const PI: number = 3.14;

  export function sum(...values: number[]): number {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
      total += values[i];
    }

    return total;
  }
  
}

export namespace CreateChild {}

export namespace example {}
