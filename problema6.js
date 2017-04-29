var matriz1 = [
	[],
	[],
	[]
];

var matriz2 = [
	[],
	[],
	[]
];

var n = prompt("Ingrese datos de la matriz: ");
n = n.split("");


matriz1[0][0] = n[0];
matriz1[0][1] = n[2];
matriz1[0][2] = n[4];
matriz1[1][0] = n[6];
matriz1[1][1] = n[8];
matriz1[1][2] = n[10];
matriz1[2][0] = n[12];
matriz1[2][1] = n[14];
matriz1[2][2] = n[16];

matriz2[0][0] = n[18];
matriz2[0][1] = n[20];
matriz2[0][2] = n[22];
matriz2[1][0] = n[24];
matriz2[1][1] = n[26];
matriz2[1][2] = n[28];
matriz2[2][0] = n[30];
matriz2[2][1] = n[32];
matriz2[2][2] = n[34];

var cerocero =  matriz1[0][0]*matriz2[0][0] + matriz1[0][1]*matriz2[1][0] + matriz1[0][2]*matriz2[2][0];
var unacero =   matriz1[1][0]*matriz2[0][0] + matriz1[1][1]*matriz2[1][0] + matriz1[1][2]*matriz2[2][0];
var doscero =   matriz1[2][0]*matriz2[0][0] + matriz1[2][1]*matriz2[1][0] + matriz1[2][2]*matriz2[2][0];

var cerouna =  matriz1[0][0]*matriz2[0][1] + matriz1[0][1]*matriz2[1][1] + matriz1[0][2]*matriz2[2][1];
var unauna =   matriz1[1][0]*matriz2[0][1] + matriz1[1][1]*matriz2[1][1] + matriz1[1][2]*matriz2[2][1];
var dosuna =   matriz1[2][0]*matriz2[0][1] + matriz1[2][1]*matriz2[1][1] + matriz1[2][2]*matriz2[2][1];

var cerodos =  matriz1[0][0]*matriz2[0][2] + matriz1[0][1]*matriz2[1][2] + matriz1[0][2]*matriz2[2][2];
var unados =   matriz1[1][0]*matriz2[0][2] + matriz1[1][1]*matriz2[1][2] + matriz1[1][2]*matriz2[2][2];
var dosdos =   matriz1[2][0]*matriz2[0][2] + matriz1[2][1]*matriz2[1][2] + matriz1[2][2]*matriz2[2][2];

var matriz3 = [
	[cerocero, cerouna, cerodos ],
	[unacero, unauna, unados ],
	[doscero, dosuna, dosdos]
];

//2,0,1-3,0,0-5,1,1/1,0,1-1,2,1-1,1,0
console.log(cerocero+","+cerouna+","+cerodos+"-"+unacero+","+unauna+","+unados+"-"+doscero+","+dosuna+","+dosdos);
