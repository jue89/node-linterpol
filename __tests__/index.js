const linterpol = require('../index.js');

test('linear interpolation (no wrap around)', () => {
	expect(linterpol(2, [
		[3, 6], // Ensure ordering points
		[1, 4]
	])).toBe(5);
});

test('linear interpolation (wrap around)', () => {
	expect(linterpol(2, [
		[3, 6], // Ensure ordering points
		[1, 4]
	], 4)).toBe(5);
});

test('interpolate value before first point', () => {
	expect(linterpol(0, [
		[1, 4],
		[3, 6]
	])).toBe(4);
});

test('interpolate value after last point', () => {
	expect(linterpol(4, [
		[1, 4],
		[3, 6]
	])).toBe(6);
});

test('interpolate value before point', () => {
	expect(linterpol(0, [
		[1, 4]
	])).toBe(4);
});

test('interpolate value after point', () => {
	expect(linterpol(2, [
		[1, 4]
	])).toBe(4);
});

test('linear interpolation with wrap around', () => {
	expect(linterpol(0, [
		[1, 4],
		[13, 6]
	], 14)).toBe(5);
});
