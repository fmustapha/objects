
import math from "./math";

test('Test the math functions', () => {
	console.log('Hello World');
    expect(math.sum(1,2)).toBe(3);
    expect(math.subtract(1,2)).toBe(-1);
    expect(math.divide(1,2)).toBe(0.5);
    expect(math.multiply(1,2)).toBe(2);
});
