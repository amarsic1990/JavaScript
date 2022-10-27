// let js = "amazing";

// // if (js === "amazing") alert("JS is fun");

// console.log("Antisaaaaa");

// // s let deklariramo varijable
// let firstName = "Antisa";
// console.log(firstName);

// // Camel case --> firstName KAMEL CASE SE KORISTI U JAVASCRIPTU!!!!!!!!!!!
// // new,function,name -->  ne  MOGU BITI  IMENA0 VARIJABLI
// // konstante pisemo VELIKIM SLOVIMA
// const PI = 3.14;

// let country = "Croatia";
// let continent = "Europe";
// let population = 4700000;
// console.log(country);
// console.log(continent);
// console.log(population);

// // u JS-u imamo objekte i primitivne vrijednosti (7 IH JE)
// // PRIMITIVNI DATA TYPEovi : NUMBER (i int i float su number), STRINGS, BOOLEAN, UNDEFINED varijabla koja jos nije definirana,
// // NULL (prazna vrijednost), SYMBOL nije korisno za nas, BIGINT za velike integere
// // u JSu ne definiramo manualno DATA TYPE

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 24);
// console.log(typeof 23.321);

// javaScriptIsFun = "Minjamo bool u string"; // dynamic typing
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year); // undefined
// console.log(typeof year); // undefined

// DEKLARIRANJE VARIJABLI
// let age = 32;
// age = 33; // mutiranje varijable
// // const --> konstante ne mogu biti promijenjene, konstantu moramo inicilizirati
// // koristiti uvijek const osim ako bas ne znamo da ce se mijenjati kasnje u programu
// const birtYear = 1991;
// // birtYear = 1990;

// // OPERATORI
// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);
// x++ --> x+1
// x-- --> x-1
// x += 1 --> x = x + 1

// CODING CHALLENGE 1#
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// console.log("-------------------------------------------");

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.75;
// markBMI = markMass / markHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;
// markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// STRINGS AND TEMPLATE LITERALS
// backtikovi
// const firstName = "Ante";
// const job = "programmer";
// const birthYear = 1990;
// const year = 2022;
// const ja = `I'm  ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(ja);

// IF ELSE STATEMENTS
// svaka varijabla koju definiramo i inicijaliziramo unutar nekog bloka nece biti dostupna izvan toga bloka
// const age = 12;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving licence 🚗");
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is to young. Wait another ${yearLeft} years :)`);
// }

// const birtYear = 1890;

// let century;

// if (birtYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// CODING CHALLENGE #2
// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.75;
// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// TYPE CONVERSION AND COERCION
// CONVERSION --> kada rucno konvertamo iz jednog typea u drugi
// COERCION --> KADA js AUTOMATSKI KONVERA TYPEOVE
// inputi sa stranice dolaze kao stringovi
// mozemo konvertati samo u : BROJ, STRING i BOOLEAN

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18); // 199118
// console.log(Number(inputYear) + 18); // 2009
// console.log(Number("Ante")); //NaN --> kada ne moze konvertirati broj vraca NaN
// console.log(typeof String(23));

// //type coercion
// // + potice coercion u string
// // ne oslanjat se previse na ovo ---
// console.log("I am " + 29 + "years old");
// console.log("23" - "10" - 3); // 10
// console.log("23" + "10" + 3); // 23103 type coercion
// console.log("23" * "2");

// TRUTHY AND FALSY VALUES
// u praksi se ovo konvertanje u boolean nikad ne koristi
// 5 falsy values: 0, '', undefined, null, Nan
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log("ime je " + Boolean("Ante"));
// console.log(Boolean({}));

// // EQUALITY OPERATIRS
// // uvik koristiti ovog strict operatora
// // == --> loose ;;;; ==== --> strict

// const ime = prompt("Kako se zoveš?"); // promptamo usera da unese nesto
// console.log(ime);

// LOGICKI OPERATORI
// && --> AND ;;;;;;;;;;;;  || --> OR ;;;;;;;;;; !<imevarijable> S UPITNIKOM OKRENEMO TRUE U FALSE I OBRNUTO

// CODING CHALLENGE 3
// const dolphins = [97, 112, 101];
// const koales = [109, 95, 106];
// let dolphinsScoresSum = 0;
// let koalseScoresSum = 0;

// for (d of dolphins) {
//   dolphinsScoresSum += d;
// }
// for (k of koales) {
//   koalseScoresSum += k;
// }
// //dolphinsAverage = dolphins / dolphins.length;
// const dolphinsAverage = dolphinsScoresSum / dolphins.length;
// const koalesAverage = koalseScoresSum / koales.length;
// // console.log(dolphinsAverage);

// if (dolphinsAverage > koalesAverage && dolphinsAverage >= 100) {
//   console.log(
//     `Dolphini su pobjedili Dolphins average: ${dolphinsAverage} Koales average: ${koalesAverage}`
//   );
// } else if (dolphinsAverage < koalesAverage && koalesAverage >= 100) {
//   console.log(
//     `Koalesi su pobjedili Dolphins average: ${dolphinsAverage} Koales average: ${koalesAverage}`
//   );
// } else if (
//   dolphinsAverage === koalesAverage &&
//   dolphinsAverage >= 100 &&
//   koalesAverage >= 100
// ) {
//   console.log(
//     `Izjednaceno je! Imamo 2 pobjednika Dolphins average: ${dolphinsAverage} Koales average: ${koalesAverage}`
//   );
// } else {
//   console.log("Niko ne osvaja trofej");
// }

// SWITCH STATEMENT
// const day = "fridayaaaa";

// switch (day) {
//   case "monday":
//     console.log("oporavak od vikenda");
//     break;
//   case "tuesday":
//     console.log("odmarat");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("pripreme za petak traju 2 danaaaaaaaaaaaaaaaa");
//     break;
//   case "friday":
//     console.log("sveti petak");
//     break;
//   case "saturday":
//     console.log("vikend subota");
//     break;
//   case "sunday":
//     console.log("sveta nedilja");
//     break;

//   default:
//     console.log("krivi datum ste umetnuli!!!!!!!!!!!!!!!!!!!!");
//     break;
// }

// // STATEMENTS AND EXPRESSIONS
// // expression --> komad koda koji proizvodi vrijednost npr 3 + 4;;; 1990 isto expression
// // statement --> veci komad koda koji ne proizvodi vrijednost npr if(23< 11) {......}

// // TERNARY OPERATOR
// const age = 2;
// age >= 18
//   ? console.log("I like to drink wine😀")
//   : console.log("I like to drink water😁");

const bill = 430;
let tip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);

// JAVA SCRIPT RELEASES
