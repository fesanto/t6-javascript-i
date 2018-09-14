// hello("what") -> "Hello, world" (ERREI??)
// hello() -> "Hello, world"
function hello() {
	return "Hello, world!"
}

// show(4) -> 16
// show(-4) -> 16
function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

// eq3() -> 1 (retorna 1 pq (a)undefined === (b)undefined && (a)undefined === (c)undefined)
// eq3(1, 2, 3) -> 0
// eq3("1", 1, 3) -> 0
// eq3("!", "a", "b") -> 0
// eq3("!", "!", !) -> erro de sintaxe
function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// Resultado: 9, 11
function sum(a) {
	return a + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)

// sum(x + 2) -> sum(7) -> sum = 7 + 2 = 9
// sum(sum(x + 2)) -> sum(sum(7)) -> sum(7 + 2) -> sum(9) -> sum = 9 + 2 = 11


// Resultado: 12, 26
function confusion(x, y) {
	x = 2 * x + y
	return x
}
let x = 2
let y = 5
y = confusion(y, x)
// confusion(5, 2)
// x = 2 * 5 + 2
// y = 12
x = confusion(y, x)
// confusion(12, 2)
// x = 2 * 12 + 2
// x = 26
console.log(`${x}, ${y}`)