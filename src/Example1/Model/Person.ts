export interface Person {
  name: string;
  age: number;
  gender: "male" | "female" | "non-binary" | "prefer not to say";
}

export type PersonKeys = keyof Person;
