var pares = [];
var impares = [];
var auxPar = 0;
var auxImpar = 0;
var resPar = [];
var resImpar = [];
var n;
var datosEntrada = [];


var n = prompt("Numero de numeros");

for( var x=0; x<=n-1; x++ ){
	datosEntrada[x] = prompt("Numero " + (x+1) +": ");
}

for( var x=0; x<=datosEntrada.length-1; x++ ){
	if( datosEntrada[x]%2 == 0){
		pares.push(datosEntrada[x]);
	}else if( datosEntrada[x]%2 !== 0 ){
		impares.push(datosEntrada[x]);
	}
}

pares.sort();
impares.sort();
impares.reverse();

for(var y = 0; y <=pares.length-1; y++){
	auxPar += parseInt(pares[y]);
}

for( var z =impares.length-1; z >= 1; z--  ){
	auxImpar = impares[z-1] - impares[z];
	impares[z-1] = auxImpar;
}

var res = auxImpar * auxPar;
console.log( "El resultado es: " + res );
