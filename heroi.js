// Desafio é criar um herói e com seu xp determinar o nivel do herói

// Criação de Variáveis

let heroi = "Spider man"
let xp = 11000
let nivel

// Condições 

if (xp <= 1000){
    nivel = "Ferro"
}
else if ((xp > 1000) && (xp <= 2000)){
    nivel = "Bronze"
}
else if ((xp > 2000) && (xp <= 6000)){
    nivel = "Prata"
}
else if ((xp > 6000) && (xp <= 7000)){
    nivel = "Ouro"
}
else if ((xp > 7000) && (xp <= 8000)){
    nivel = "Platina"
}
else if ((xp > 8000) && (xp <= 9000)){
    nivel = "Ascendente"
}
else if ((xp > 9000) && (xp <= 10000)){
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}

// Saida

console.log("O Herói de nome " + heroi + " esta no nivel de " + nivel)