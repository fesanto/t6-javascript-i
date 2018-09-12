// 1. Escreva um loop em Javascript que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]

let matriz = []
for (let l = 0; l < 5; l++) {

    let arr = []
    for (let i = 0; i < 5; i++) {
        arr.push(0)
        //    console.log("dentro do for", i, arr)
    }

    matriz.push(arr)
}
//console.log("fora do for", arr)
console.log(matriz)

// ou

let arr = []
for (let i = 0; i < 5; i++) {
    arr.push(0)
}

let matriz = []
for (let i = 0; i < 5; i++) {
    matriz.push(linha)
}

// ou

let matriz = []
let linha = []
for (let i = 0; i < 5; i++) {
    linha.push(0)
    matriz.push(linha)
    console.log(matriz)
}


// ************************************************************************************
// 2. Escreva um loop em Javascript que gera uma matriz no seguinte formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]

let matriz = []
for (let l = 0; l < 5; l++) {

    let arr = []
    for (let i = 0; i < 5; i++) {
        arr.push(Math.abs(i - l))
    }

    matriz.push(arr)
}
console.log(matriz)


// 1 iteracao A -> l = 0; matriz = [];
// 1 iteracao B - i = 0; linha = []; linha.push(0 - 0) -> linha = [0]
// 2 iteracao B - i = 1; linha = [0]; linha.push(1 - 0) -> linha = [0, 1]
// 3 iteracao B - i = 2; linha = [0, 1]; linha.push(2 - 0) -> linha = [0, 1, 2]
// 4 iteracao B - i = 3; linha = [0, 1, 2]; linha.push(3 - 0) -> linha = [0, 1, 2, 3]
// 5 iteracao B - i = 4; linha = [0, 1, 2, 3]; linha.push(4 - 0) -> linha = [0, 1, 2, 3, 4]
// matriz.push([0, 1, 2, 3, 4]) -> matriz = [0, 1, 2, 3, 4]

// 2 iteracao A -> l = 1; matriz = [0, 1, 2, 3, 4]
// 1 iteracao B - i = 0; linha = []; linha.push(0 - 1) -> linha = [0]
// 2 iteracao B - i = 1; linha = [-1]; linha.push(1 - 1) -> linha = [-1, 0]
// 3 iteracao B - i = 2; linha = [-1, 0]; linha.push(2 - 1) -> linha = [-1, 0, 1]
// 4 iteracao B - i = 3; linha = [-1, 0, 1]; linha.push(3 - 1) -> linha = [-1, 0, 1, 2]
// 5 iteracao B - i = 4; linha = [-1, 0, 1, 2]; linha.push(4 - 1) -> linha = [-1, 0, 1, 2, 3]
// matriz.push([-1, 0, 1, 2, 3]) -> matriz = [0, 1, 2, 3, 4], [-1, 0, 1, 2, 3]


// ************************************************************************************
// 3. Escreva um loop em Javascript que printa o seguinte padrão no console:
// *******
// ******
// *****
// ****
// ***
// **
// *


for (let j = 0; j < 7; j++) {
    let ast = ""
    for (let i = 0; i < (7 - j); i++) {
        ast += "*"
    }
    console.log(ast)
}

// ou

for (let j = 0; j < 7; j++) {
    let ast = ""
    for (let i = j; i < 7; i++) {
        ast += "*"
    }
    console.log(ast)
}

// ou

let ast = "********"
while (ast.length > 1) {
    ast = ast.substr(1, (ast.length - 1))
    console.log(ast)
}


// ************************************************************************************
// 4. Escreva um loop em Javascript que printa o seguinte padrão no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 

for (let j = 1; j <= 7; j++) {
    let ast = ""

    for (let k = 1; k < 1 + j; k++) {
        ast += k
    }

    for (let i = j; i < 7; i++) {
        ast += "*"
    }

    console.log(ast)
}

// ou

for (let j = 1; j <= 7; j++) {
    let ast = ""
    for (let k = 1; k <= j; k++) {
        ast += k
    }
    for (let i = j; i < 7; i++) {
        ast += "*"
    }
    console.log(ast)
}

// ou

let linha = ""
for (let i = 1; i <= 7; i++) {
    linha += i
    let ast = linha
    for (let j = 7; j > i; j--) {
        ast += "*"
    }
    console.log(ast)
}