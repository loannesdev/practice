const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
/* 	test("Debería mostrarse 1", () => {
		const r = fizzbuzz(1);
		expect("").toBe(r);
	}) */

	test("Debería mostrarse 'fizz' si es múltiplo de 3", () => {
		const r = fizzbuzz(6);
		expect("fizz").toBe(r);
	})

	test("Debería mostrarse 'buzz' si es múltiplo de 5", () => {
		const r = fizzbuzz(15);
		expect("fizzbuzz").toBe(r);
	})
});