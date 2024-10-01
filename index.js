
const readlineSync = require('readline-sync');

const nomeHeroi = readlineSync.question("Digite o nome do heroi: ");

const expXP = Number.parseInt(readlineSync.question("Digite a quantidade de experiencia (XP) do heroi:"));

let nivelHeroi = "";

if (expXP < 1000) {
    nivelHeroi = "Ferro";
} else if (expXP >= 1001 && expXP <= 2000) {
    nivelHeroi = "Bronze";
} else if (expXP >= 2001 && expXP <= 5000) {
    nivelHeroi = "Prata";
} else if (expXP >= 5001 && expXP <= 7000) {
    nivelHeroi = "Ouro";
} else if (expXP >= 7001 && expXP <= 8000) {
    nivelHeroi = "Platina";
} else if (expXP >= 8001 && expXP <= 9000) {
    nivelHeroi = "Ascendente";
} else if (expXP >= 9001 && expXP <= 10000) {
    nivelHeroi = "Imortal";
} else if (expXP >= 10001) {
    nivelHeroi = "radiante";
}

console.log(`O Heroi de nome ${nomeHeroi} esta no nivel de ${nivelHeroi}`);