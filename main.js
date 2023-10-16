function getNameXp(vitorias, derrotas) {

  const numeroVitorias = Number(vitorias);
  const numeroDerrotas = Number(derrotas);
  const rankingHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendario", "Imortal"];

  const saldoVitorias = numeroVitorias - numeroDerrotas;

  if (!numeroVitorias) {
    return console.log("voce digitou o número de vitorias do heroi incorretamente");
  }
  if (!numeroDerrotas) {
    return console.log("voce digitou o número de derrotas do heroi incorretamente");
  }

  

  if (saldoVitorias <= 10) {
    return console.log(`O Herói tem saldo de **${saldoVitorias}** está no nível de **${rankingHeroi[0]}**`);
  }
  if (saldoVitorias <= 20) {
    return console.log(`O Herói tem saldo dee **${saldoVitorias}** está no nível de **${rankingHeroi[1]}**`);
  }
  if (saldoVitorias <= 50) {
    return console.log(`O Herói tem saldo de **${saldoVitorias}** está no nível de **${rankingHeroi[2]}**`);
  }
  if (saldoVitorias <= 80) {
    return console.log(`O Herói tem saldo de **${saldoVitorias}** está no nível de **${rankingHeroi[3]}**`);
  }
  if (saldoVitorias <= 90) {
    return console.log(`O Herói tem saldo de **${saldoVitorias}** está no nível de **${rankingHeroi[4]}**`);
  }
  if (saldoVitorias <= 100) {
    return console.log(`O Herói tem saldo de **${saldoVitorias}** está no nível de **${rankingHeroi[5]}**`);
  }else{
    return console.log(`O Herói tem saldo de **${saldoVitorias}** está no nível de **${rankingHeroi[6]}**`);
  }

}

console.log(getNameXp(9591, 9500));