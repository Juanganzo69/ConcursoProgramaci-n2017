var abc = [
	"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

var variable1 = 0;
var variable2 = 0;

var palabra = prompt("introduce tu palabra");

palabra = palabra.toLowerCase().split("");
palabra.sort();

for(var x =0; x <= abc.length-1; x++){
	if(abc[x] == palabra[palabra.length-1]){
			x += 1;
			variable1 = x;
	   }else if( abc[x] == palabra[0] ){
		   x += 1;
		   variable2 = x;
	   }
}

var res = variable1 - variable2;
console.log("Respuesta: "+res);