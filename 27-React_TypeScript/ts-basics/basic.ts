// Primites: number, string, boolean,
// More complex types: arrays, objects
// Function types, parameters;

let age: number;

age = 12;

let userName: string | string[];

userName = "Andre";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking", "12"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Andre",
  age: 26,
};

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12345;

// Functions & types

function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('');
