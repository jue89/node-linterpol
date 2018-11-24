# Linterpol

Linear interpolation. No international criminal police organization.

## API

```js
const linterpol = require('linterpol');

const points = [
//	[ x,  y]
	[01, 16],
	[09, 16],
	[11, 18],
	[23, 18]
];

// Interpolate value within given points
linterpol(08, points) // == 16
linterpol(10, points) // == 17
linterpol(12, points) // == 18

// Interpolate without wrap around
linterpol(00, points) // == 16
linterpol(24, points) // == 18

// Interpolate with wrap around
linterpol(00, points, 24) // == 17
linterpol(24, points, 24) // == 17

```
