// Desafio é criar um herói e com seu xp determinar o nivel do herói

// Criação de Variáveis

let heroi = "Spider man"
let xp = 11000

// Condições 

if (xp <= 1000){
    console.log("O heroi de nome " + heroi + " está no nível de Ferro")
}
else if ((xp > 1000) && (xp <= 2000)){
    console.log("O heroi de nome " + heroi + " está no nível de Bronze")
}
else if ((xp > 2000) && (xp <= 6000)){
    console.log("O heroi de nome " + heroi + " está no nível de Prata")
}
else if ((xp > 6000) && (xp <= 7000)){
    console.log("O heroi de nome " + heroi + " está no nível de Ouro")
}
else if ((xp > 7000) && (xp <= 8000)){
    console.log("O heroi de nome " + heroi + " está no nível de Platina")
}
else if ((xp > 8000) && (xp <= 9000)){
    console.log("O heroi de nome " + heroi + " está no nível de Ascendente")
}
else if ((xp > 9000) && (xp <= 10000)){
    console.log("O heroi de nome " + heroi + " está no nível de Imortal")
}
else {
    console.log("O heroi de nome " + heroi + " está no nível de Radiante")
}