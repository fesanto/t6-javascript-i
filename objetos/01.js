// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {
	numero_nacional: 143,
	nome: "Snorlax",
	nome_japones: "Kabigon",
	numero_johnto: 230,
	evolui_de: "Munchlax",
	janiarli_tem: true
}


// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
pokemon.diga_ola = function () {
	console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
}

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.can_fly = false

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".
pokemon.fly = function () {
	if (this.can_fly) {
		return "Flyyyyiinnngggg!"
	} else {
		return "Sorry, I can't fly"
	}
}

// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

const hitmonchan = {
    "numero": 107,
    "nome": "Hitmonchan",
    "nome_japones": "Ebiwalar",
    "numero_em_Johto": 147,
    "numero_em_Hoenn": null,
    "numero_em_Sinnoh": null, 
    "numero_em_Unova": null,
    "evolucao": "Tyrogue",
    "can_fly": false,
}

hitmonchan.do_something = function(){
    let rand = Math.floor(Math.random()*3)
    if (rand === 0){
        return "FIGHT"
    } else if (rand === 1){
        return "BAG"
    } else {
        return "RUN"
    }
}

hitmonchan.do_something() //para chamar a funcao

//ou

hitmonchan.do_something = function(){
    let acoes = ["FIGHT", "BAG", "RUN"]
    return acoes [Math.floor(Math.random() * acoes.length)]
}


// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

const pinsir = {
    "numero": 127,
    "nome": "Pinsir",
    "nome_japones": "Kailios",
    "numero_em_Johto": 113,
    "numero_em_Hoenn": 167,
    "numero_em_Sinnoh": null, 
    "numero_em_Unova": null,
    "evolucao": "Ovo",
    "can_fly": false,
} 

pinsir.do_something = function(){
    let rand = Math.floor(Math.random()*3)
    if (rand == 0){
        return "FIGHT"
    } else if (rand == 1){
        return "BAG"
    } else {
        return "RUN"
    }
}

pinsir.ask = function (){
    console.log(`What will ${this.nome} do?`)
    return this.do_something()
}

pinsir.ask() //para chamar a função


// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.

const aerodactyl = {
    "numero": 142,
    "nome": "Aerodactyl",
    "nome_japones": "Ptera",
    "numero_em_Johto": 229,
    "numero_em_Hoenn": null,
    "numero_em_Sinnoh": null, 
    "numero_em_Unova": null,
    "evolucao": "Ovo/Old Amber",
    "can_fly": true,
} 

for (const prop in aerodactyl){
    console.log(prop)
}


// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

const dragonite = {
    "numero": 149,
    "nome": "Dragonite",
    "nome_japones": "Kairyu",
    "numero_em_Johto": 248,
    "numero_em_Hoenn": null,
    "numero_em_Sinnoh": null, 
    "numero_em_Unova": null,
    "evolucao": "Dragonair",
    "can_fly": true,
}

for (const prop in dragonite){ 
    console.log(`${prop}, ${dragonite[prop]}`) 
} 


// 9.
// Crie uma funcao construtora (sempre com letra maiuscula)
// de um pokemon generico function (nome, nome_japones) {}

function Pokemon(nome, nome_japones){
    this.nome = nome
    this.nome_japones = nome_japones
    this.diga_ola = function(){
        console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
    }
    this.voe = function(){
        if (this.pode_voar){
            return "É nóis que voa, bruxão!"
        } else {
            return "I believe I can fly, but I can't..."
        }
    }
    this.manda_ver = function (){
        let acoes = [
            "Desce a porrada",
            "Deu ruim",
            "Ash, vambora daqui"
        ]
        return acoes[Math.floor(Math.random()* acoes.length)]
    }
}