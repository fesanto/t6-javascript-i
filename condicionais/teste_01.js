let a = 1
let b = 2
let c = 3

// Resultado: RODA Hello, world!
if (6 < 2 * 5) { // 6 < 10
	console.log("Hello, world!")
}

// Resultado: RODA 2222
if (a > b && a > c) { // 1 > 2 &&..
	console.log(1111)
} else {
	console.log(2222)
}

// Resultado: RODA *
if (a < c) { // 1 < 3
	console.log("*")
} else if (a === b) { // nao executa
	console.log("&")
} else { // nao executa
	console.log("$")
}

// Resultado: RODA ####
if (a < b) { // 1 < 2
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado: RODA ${100} ${200} ${0}
const x = 100
const y = 200
if (x > 100 && y <= 200) { // 100 > 100 && ..
	console.log(`${x} ${y} ${x + y}`)
} else { 
	console.log(`${x} ${y} ${2 * x - y}`)
}

// Resultado: RODA *
if (a < c) { // 1 < 3
	console.log("*")
} else if (a === c) { // nao executa
	console.log("&")
} else { // nao executa
	console.log("$")
}

// Resultado: RODA {1} ${3} ${4}
if (a++ > b++ || a-- > 0) { // 2 > 3 || 1 > 0
	c++
} else {
	c--
}
console.log(`${a} ${b} ${c}`)

// Resultado: RODA ####
if (a < b) { // 1 < 3
	console.log("####")
} else {
	console.log("&&&&")
}

// Resultado: RODA ****
if (a < c) { // 1 < 4
	console.log("****")
} else if (b > a) { // nao executa
	console.log("&&&&")
} else { // nao executa
	console.log("####")
}