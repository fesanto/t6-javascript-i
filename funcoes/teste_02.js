// Escreva uma função em Javascript que recebe um nome, um pronome e um objeto
// e retorna "<nome> foi caminhar no parque. <pronome> encontrou
// <objeto>. <nome> decidiu levar <objeto> pra casa."

function story(nome, pronome, objeto){
    return `${nome} foi caminhar no parque. ${pronome} encontrou ${objeto}. ${nome} decidiu levar ${objeto} pra casa.`
}

story("carol", "ela", "carro")


// Escreva uma função em Javascript que recebe
// um número qualquer e retorna a raiz quadrada dele.

function sqrt(num){
    return Math.sqrt(num) 
}

//ou

function sqrt(num){
	return num ** (1/2)
}

//ou

function sqrt(num){
	if (num < 0) {
			throw "Não existe raiz quadrada de número negativo"
	}
	return num ** (1/2)
}


// Escreva uma função em Javascript que recebe um
// número qualquer e retorna a representação binaria dele.

function binario(x){
    let calc_binario = x.toString(2)
    return calc_binario
}
 binario(5) 

 //ou

 function binary(num) {
	let result = ""
	do {
		 result = (num % 2) + result
		 num = Math.floor(num/2)
	} while (num > 0)
	return result
 }

 //ou

 function binary(x){
	return num.toString(2)
 }

// Escreva uma função em Javascript que recebe uma lista de números
// e retorna o maior número da lista.

function lista(arr) { 
	let sorted = []

	while (arr.length > 0) {
        let lowest = Infinity
        let lowest_index
        for (const [index, item] of arr.entries()) {
            if (item < lowest) {
            	lowest = item
				lowest_index = index
			}
        }
        sorted.push(lowest) 
		arr.splice(lowest_index, 1)
	}
	return sorted[sorted.length -1]
}

lista([2, 6, 8, 15])

//ou

function lista(arr) { 
	if (typeof arr !== "objeto"){
		throw "Por favor, forneça uma lista."
	}

    let larger = -Infinity
    for (const item of arr) {
        if (typeof item !== "number"){
				throw "Por favor, forneça uma lista só de números."
		}
		if (item > larger) {
			larger = item
		}
	}
	return larger
}

//ou

function max(arr){
	return Math.max(...arr)
}

//ou

function max(arr){
	return Math.max.apply(null, arr)
}

5, 6, 2, 9, 1
// 1 iteracao -> item = 5; larger = -infinity; 5 > -Infinity?
// 2 iteracao -> item = 6; larger = 6; 6 > 5?
// 3 iteracao -> item = 2; larger = 6; 6 > 6?
// 4 iteracao -> item = 9; larger = 6; 9 > 6?

// Escreva uma função em Javascript que vai checar se duas ou mais
// strings sao anagramas umas das outras.

//.split("") transforma string em array
//.sort() organiza elementos
//.join() junta tudo da array numa string

function isAnagran(arr) {
	const str = str.split("").sort().join("").trim()
	if (reverse == str) {
		return true
	}

	return false
}

// areAnagrams("alice", "celia", "alcei") ->
// first = "aceil"
// 1 iteracao -> i = 1; arguments[1] = "celia"; "aceil" !== first ?
// 2 iteracao -> i = 2; arguments[2] = "alcei"; "aceil" !== first ?
// PARA


// Escreva uma função em Javascript que recebe o raio de um circulo
// e calcula o diametro, a circunferencia e a area dele.

function circleDimensions(r) {
    const diameter = r * 2
    const circunference = diameter * Math.PI
    const area = Math.PI * r * r
    return [ diameter, circunference, area ]
}