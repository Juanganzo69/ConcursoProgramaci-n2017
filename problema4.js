var numeroBinario1 = prompt("Dame un número : ");
var numeroBinario2 = prompt("Dame otro número : ");

numeroBinario1 = parseInt(numeroBinario1,2);
numeroBinario2 = parseInt(numeroBinario2,2);

var multiDec = numeroBinario1 * numeroBinario2; 
multiDec = (parseInt(multiDec)).toString(2);
console.log("Tu resultado es: " + multiDec);