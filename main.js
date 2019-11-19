var numerocas = Math.floor(Math.random() * 6) +1;
console.log(numerocas);

var insert = parseInt(prompt('inserisci un numero intero fra 1 e 6'));
console.log(insert);

if (isNaN(insert && insert < 1 && insert > 6)) {
  console.log('il numero inserito non è corretto');
} else {
  console.log('il numero digitato è ' + insert);


  if (numerocas > insert) {
    console.log('hai perso');

  } else if (insert > numerocas) {
    console.log('hai vinto');

  }
  else {
    console.log('pari');
  }
}
