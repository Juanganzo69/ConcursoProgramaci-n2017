//24-04-2017/26-04-2017
var date = prompt("dame las fechas: ");

var dateDay = date.substr(0,2);
var dateMM = date.substr(3,2);
var dateYear = date.substr(6,4);
var dateDay2 = date.substr(11,2);
var dateMM2 = date.substr(14,2);
var dateYear2 = date.substr(17,4);

var date1 = new Date(dateMM+"-"+dateDay+"-"+dateYear);
var date2 = new Date(dateMM2+"-"+dateDay2+"-"+dateYear2);
console.log(date1);
console.log(date2);;

var x = date1.getTime()/(1000*60*60*24);
var y = date2.getTime()/(1000*60*60*24);
var z = y-x;
console.log(z);