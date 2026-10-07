let nome = "Gustavo";
let xp = 8999;
let nivel = "";

if (xp <= 1000){ nivel = "Ferro"
}
else if(xp <= 2000){ nivel = "Bronze"
}
else if(xp <= 3000){ nivel = "Prata"
}
else if(xp <= 4000){ nivel = "Ouro"
}
else if(xp <= 5000){ nivel = "Platina"
}
else if(xp <= 6000){ nivel = "Diamante"
}
else if(xp <= 8000){ nivel = "Ascendente"
}
else if(xp <= 9000){ nivel = "Imortal"
}
else if(xp >= 9001){ nivel = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);