import assert from "node:assert/strict";
import { describe, it } from "node:test";
import Person from "../src/mod.ts";

describe("Person", () => {
	const alice = new Person("Alice", 25, "EUR");
	const bob = new Person("Bob", 17, "USD");
	const charlie = new Person("Charlie", 21, "USD");

	it("should create a new instance", () => {
		assert.strictEqual(alice.name, "Alice");
		assert.strictEqual(alice.age, 25);
		assert.strictEqual(alice.from, "EUR");
		assert.strictEqual(bob.name, "Bob");
		assert.strictEqual(bob.age, 17);
		assert.strictEqual(bob.from, "USD");
	});

	it("should greet", () => {
		assert.strictEqual(alice.greet(), "Hello, my name is Alice and I am 25 years old.");
		assert.strictEqual(bob.greet(), "Hello, my name is Bob and I am 17 years old.");
	});

	it("should determine if adult", () => {
		assert.strictEqual(alice.isAdult(), true);
		assert.strictEqual(bob.isAdult(), false);
	});

	it("should say hello", () => {
		assert.doesNotThrow(() => alice.sayHello());
		assert.doesNotThrow(() => bob.sayHello());
	});

	it("should determine if can drink", () => {
		assert.strictEqual(alice.canDrink(), true);
		assert.strictEqual(bob.canDrink(), false);
		assert.strictEqual(charlie.canDrink(), true);
	});

	it(".toString() should return a string", (t) => {
		t.assert.snapshot(alice.toString());
	});

	it(".toString is parsable JSON", () => {
		assert.doesNotThrow(() => JSON.parse(alice.toString()));
	});
});
