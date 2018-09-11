// Escreva a expressão em Javascript que atribui o
// valor `1` a `x` se `x` for maior do que `y`.

let x = 3
let y = 1
if (x > y){
    x = 1
}
console.log(x)

// Escreva a expressão em Javascript que aumenta o
// valor da variável `score` em 5 unidades caso o valor
// inicial de `score` esteja entre 80 e 90.

let score = 81
if (score >= 80 && score <= 90){
    score = score + 5   // score +=5
}
console.log(score)


// Reescreva a seguinte condicional sem usar o operador `!`:
// item = ! ( i < 10 || v >= 50 )

(i < 10 || v >=50) === false
(i >= 10 && v < 50)


i = 10
y = 50

!(i < 10 || v >= 50)
!(10 < 10 || 50 >= 50)
!(false || true)
!(true)
false


(i < 10 && v >= 50)
(10 < 10 && 50 >=50)
(false && true)
true

(i >= 10 || v < 50)
(10 >= 10 || 50 < 50)
(true || false)
true

(i >=10 && v < 50)
(10 >= 10 && 50 < 50)
(true && false)


// Escreva a expressão em Javascript que retorna `true`
// se um número é par e `false` se um número é impar.

x = 2
if (x % 2 === 0){  // (%) módulo = resto de uma divisão
    console.log(true)
} else{
    console.log(false)
}

if (x & 1){ // testar e entender bitcheck ou bitwise
    "i"
}

// Escreva a expressão em Javascript que retorna `true` 
// se dois números forem positivos e `false` se dois números 
// forem negativos.

x = 2
y = 4
if (x > 0 && y > 0){
    console.log(true)
} else if (x < 0 && y < 0){
    console.log(false)
} else {
    console.log("ambos números não são positivos ou negativos")  // throw "são neg ou posi?!"
}


// Escreva a expressão em Javascript que retorna `true`
// se dois números tiverem os mesmo sinal (+ / -) e `false` 
// se dois números tiverem sinais diferentes. 

if ((x > 0 && y > 0) || 
    (x < 0 && y < 0) ){
    console.log(true)
} else{
    console.log(false)
}

if (Math.sign(x) === Math.sign(y)) && 
    Math.sign(x) !== 0){
        console.log(true)
    } else {
        console.log(false)
    }