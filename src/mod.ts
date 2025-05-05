/* @ts-self-types="./mod.d.ts" */

/**
 * Represents a person with a name, age, and origin.
 */
class Person {
	/**
	 * The name of the person.
	 */
	name: string;
	/**
	 * The age of the person.
	 */
	age: number;
	/**
	 * The origin of the person, either 'EUR' or 'USD'.
	 */
	from: From;

	/**
	 * Creates a new Person.
	 * @param name - The name of the person.
	 * @param age - The age of the person.
	 * @param from - The origin of the person, either 'EUR' or 'USD'.
	 */
	constructor(name: string, age: number, from: From) {
	  this.name = name;
	  this.age = age;
	  this.from = from;
	}

	/**
	 * Returns a greeting message.
	 * @returns A greeting message including the person's name and age.
	 */
	greet(): string {
	  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}

	/**
	 * Checks if the person is an adult.
	 * @returns True if the person is 18 years or older, otherwise false.
	 */
	isAdult(): boolean {
	  return this.age >= 18;
	}

	/**
	 * Logs the greeting message to the console.
	 */
	sayHello(): void {
	  console.log(this.greet());
	}

	/**
	 * Checks if the person can drink based on their origin.
	 * @returns True if the person is of legal drinking age in their origin, otherwise false.
	 */
	canDrink(): boolean {
	  return this.from === 'EUR' ? this.age >= 18 : this.age >= 21;
	}

	/**
	 * Returns a string representation of the person.
	 * @returns A JSON string representing the person.
	 */
	toString(): string {
	  return JSON.stringify(this);
	}
  }

  /**
   * Type representing the origin of the person.
   * @typedef {'EUR' | 'USD'} From
   */
  type From = 'EUR' | 'USD';

  export default Person;
