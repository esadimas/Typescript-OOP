# Typescript OOP
Recall: Mengingat kembali konsep oop di javascript atau typescript

# Apa itu OOP ?

OOP (Object-Oriented Programming) atau Pemrograman Berorientasi Objek adalah paradigma pemrograman yang berbasis pada konsep objek. Objek merupakan entitas yang menggabungkan data (disebut properti/atribut) dan fungsi (disebut metode) untuk memodelkan hal-hal di dunia nyata atau abstraksi sistem.

## 1. Konsep Dasar OOP

- Class: Template untuk membuat objek.
- Object: Instansiasi dari sebuah class.
- Encapsulation: Membungkus data dan metode dalam sebuah class.
- Inheritance: Pewarisan sifat dari class lain.
- Polymorphism: Kemampuan objek untuk memiliki berbagai bentuk.
- Abstraction: Menyembunyikan detail implementasi dan hanya menunjukkan fitur penting.

## 2. Membuat Class

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Dimas", 30);
person.greet(); // Output: Hello, my name is Dimas and I am 18 years old.
```

## 3. Access Modifiers

- public: Default. Bisa diakses di mana saja.
- private: Hanya bisa diakses di dalam class itu sendiri.
- protected: Bisa diakses di dalam class dan class turunannya.

## 4. Inheritance

```ts
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy barks.
```

## 5. Polymorphism

```ts
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => console.log(shape.area()));
```

## 6. Interface dan Abstract Class

- Interface hanya mendefinisikan struktur (kontrak) tanpa implementasi.
- Abstract Class mendefinisikan kontrak dengan implementasi parsial.

Interface:

```ts
interface Vehicle {
  name: string;
  speed: number;

  move(): void;
}

class Car implements Vehicle {
  constructor(public name: string, public speed: number) {}

  move(): void {
    console.log(`${this.name} moves at ${this.speed} km/h.`);
  }
}
```

Abstract Class:

```ts
abstract class Appliance {
  abstract turnOn(): void;

  turnOff(): void {
    console.log("Appliance is turned off.");
  }
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing Machine is now on.");
  }
}
```

## 7. Static Properties dan Methods

Tidak memerlukan instansiasi untuk diakses.

```ts
class MathUtil {
  static PI = 3.14;

  static calculateCircleArea(radius: number): number {
    return this.PI * radius ** 2;
  }
}

console.log(MathUtil.PI); // Output: 3.14
console.log(MathUtil.calculateCircleArea(5)); // Output: 78.5
```

## 8. Getter dan Setter

```ts
class Employee {
  private _salary: number;

  constructor(salary: number) {
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._salary = value;
  }
}

const emp = new Employee(5000);
console.log(emp.salary); // Output: 5000
emp.salary = 6000; // Mengubah salary
console.log(emp.salary); // Output: 6000
```
## Kelebihan OOP
- Reusability: Kode dapat digunakan kembali melalui pewarisan.
- Modularitas: Kode lebih terorganisir dalam unit-unit kecil.
- Mudah Dipelihara: Perubahan pada satu objek tidak memengaruhi yang lain.
- Abstraksi: Detail yang tidak perlu bisa disembunyikan.

## Contoh Kasus Dunia Nyata
Misalnya, sistem manajemen kendaraan:

- Class: Vehicle, Car, Truck.
- Properties: color, speed.
- Methods: startEngine(), stopEngine().

