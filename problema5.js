var numeroAnalisis = 0;
var mod = [];
var cont = 0;

var palabra = [
	["mil",1000],
	["novecientos",900],
	["ochocientos",800],
	["setecientos",700],
	["seiscientos",600],
	["quinientos",500],
	["cuatrocientos",400],
	["trescientos",300],
	["doscientos",200],
	["cien",100],
	["ciento",100],
	["noventa",90],
	["ochenta",80],
	["setenta",70],
	["sesenta",60],
	["cincuenta",50],
	["cuarenta",40],
	["treinta",30],
	["veintinueve",29],
	["veintiocho",28],
	["veintisiete",27],
	["veintiseis",26],
	["veinticinco",25],
	["veinticuatro",24],
	["veintitres",23],
	["veintdos",22],
	["veintiuno",21],
	["veinte",20],
	["diecinueve",19],
	["dieciocho",18],
	["diecisiete",17],
	["dieciseis",16],
	["quince",15],
	["catorce",14],
	["trece",13],
	["doce",12],
	["once",11],
	["diez",10],
	["nueve",9],
	["ocho",8],
	["siete",7],
	["seis",6],
	["cinco",5],
	["cuatro",4],
	["tres",3],
	["dos",2],
	["uno",1],
	["cero",0],
	["y",0]	
];

var numero = prompt("Ingresa un número en texto: ");
numero = numero.split(" ");


for( var x=0; x<=palabra.length-1; x++ ){
	for(var y=0; y<=numero.length-1; y++){
		if( numero[y] == palabra[x][0] ){
			numeroAnalisis += palabra[x][1];
		}
	}
}

//console.log( numeroAnalisis );

while( numeroAnalisis !==0 ){
	  mod.push(numeroAnalisis%8);
	  numeroAnalisis = Math.floor((numeroAnalisis/8));
	  cont++;
}

mod = mod.reverse();
mod = mod.join("");

console.log(" Número en octal shabal " + mod);