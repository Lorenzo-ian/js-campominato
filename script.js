//Dichiaro le variabili
var proibiti = [];

while (proibiti.length < 16) {
    var random = Math.floor(Math.random()*100)+ 1;
    if (!proibiti.includes(random)){
      proibiti.push(random);
    }
  }

console.log(proibiti)

var match = false;
var somma = 0;

while (match == false) {
    var gioca = parseInt(prompt("Inserisci un numero da 1 a 100!"));
    if (proibiti.includes(gioca)) {
        alert ("Hai perso!");
        match = true;
    } else {
        somma ++;
    }
}

document.writeln("Hai totalizzato " + somma + " punti")



