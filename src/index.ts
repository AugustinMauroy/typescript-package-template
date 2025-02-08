/* @ts-self-types="./index.d.ts" */

type From = 'EUR' | 'USD'

class Person {
	name: string;
	age: number;
	from: From;

	constructor(name: string, age: number, from: From) {
		this.name = name;
		this.age = age;
		this.from = from;
	}

	greet(): string {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}

	isAdult(): boolean {
		return this.age >= 18;
	}

	sayHello(): void {
		console.log(this.greet());
	}

	canDrink(): boolean {
		return this.from === 'EUR' ? this.age >= 18 : this.age >= 21;
	}

	toString(): string {
		return JSON.stringify(this);
	}
}

export default Person;
