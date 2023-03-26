export const ZooExample = () => {
  const dog = new Dog("Jackie", "Husky");
  const cat = new Cat("Bob", "Black");

  const zoo = new Zoo();
  zoo.addAnimal(dog);
  zoo.addAnimal(cat);

  zoo.feedAll();

  return <div></div>;
};

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

class Cat extends Animal {
  color: string;
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
}

class Zoo<T extends Animal> {
  private animals: T[] = [];

  addAnimal(animal: T): void {
    this.animals.push(animal);
  }

  getAnimal(index: number): T {
    return this.animals[index];
  }

  feedAll(): void {
    for (const animal of this.animals) {
      if (animal instanceof Dog) {
        console.log(
          `Feeding ${animal.name} the ${animal.breed} some dog food.`
        );
      } else if (animal instanceof Cat) {
        console.log(
          `Feeding ${animal.name} the ${animal.color} cat some cat food.`
        );
      } else {
        console.log(`Feeding ${animal.name} some generic animal food.`);
      }
    }
  }
}
