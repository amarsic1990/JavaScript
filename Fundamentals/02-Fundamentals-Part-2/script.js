/**
 * STRICT MODE
 *  */

// da pisemo siguran JS code
// ovo nam mora biti prva linija koda komentari se ne broje
// "use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive :D");

/**
 * FUNCTIONS
 *  */
// deklariranje fukncija
// function logger() {
//   console.log("my name is Antimon!!!");
// }

// calling/ running / invoking function
// logger();
// logger();
// logger();

// prilikom definiranja funkcija u zagradama unosimo parametre

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice; // ovo vracamo
// }

// appleJuice = fruitProcessor(5, 0); // ovo ovde su argumenti
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

/**
 * FUNCTION DECLARATIONS VS EXPRESSIONS
 *  */
// ovisi  zeljama i preferencijama kako cemo pisat funkcije
// FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

/**
 * ARROW FUNCTIONS
 *   */

// // this ne mozemo staviti u linearne funcije
// const calcAge3 = (birthYeah) => 2037 - birthYeah; // RETURN NE STAVLJAMO SAMO KADA IMAMO JEDNU LINIJU KODA
// const age3 = calcAge3(1000);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}`;
// };

// console.log(yearsUntilRetirement(1991, "Ante"));

/**
 * FUNCTIONS CALLING OTHER FUNCTIOMS
 *  */

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
//   return juice; // ovo vracamo
// }

// console.log(fruitProcessor(2, 3));

/**
 * REVIEWING FUNCTIONS
 */

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//     console.log(`${firstName} retires in ${retirement}`); // ALT + STRELICA PUT GORE --> za dignuti liniju iznad
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`);
//   }
// };

// console.log(yearsUntilRetirement(1991, "Ante"));
// console.log(yearsUntilRetirement(1970, "Mike"));

/**
 * CODDING CHALLENGE #1
 */

// const calcAverage = (scores) => {
//   let average = 0;
//   for (i of scores) {
//     average += i;
//   }
//   average /= scores.length;
//   return average;
// };

// const checkWinner = (dolphinsAvg, koalesAvg) => {
//   if (dolphinsAvg >= koalesAvg * 2) {
//     return `Dolphins wins (${dolphinsAvg} vs. ${koalesAvg})`;
//   } else if (koalesAvg >= dolphinsAvg * 2) {
//     return `Koales wins (${koalesAvg} vs. ${dolphinsAvg})`;
//   } else {
//     return `nobody wins! (${dolphinsAvg} vs. ${koalesAvg})`;
//   }
// };

// const dolphinsScores = [85, 54, 41];
// const koalesScores = [23, 34, 27];
// const dolphinsAverage = calcAverage(dolphinsScores);
// const koalesAverage = calcAverage(koalesScores);
// const winner = checkWinner(dolphinsAverage, koalesAverage);
// console.log(winner);

/**
 * INTRODUCTION TO ARRAYS
 */
// programiranje se vrti oko podataka....
// u JS dvi najvaznije strukture podataka su ARRAYI I OBJEKTI!!!!!!!!!!!!!!!!!
// const friends = ["Ante", "Jure", "Danica"];

// const years = new Array(1991, 2001, 2022, 2005);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Pave"; // array nije primitivna vrijednost i njega mozemo minjati iako je const

// const firstName = "Ante";
// const ante = [firstName, "Marsic", 2037 - 1990, friends, "teacher"];

/**
 * BASIC ARRAY OPERATIONS (NETHODS)
 */
// const friends = ["Ante", "Jure", "Danica"];
// const newFriend = friends.push("Pave"); // push dodaje element na kraja arraya i vraca broj elemenata u arraya
// console.log(friends);
// console.log(newFriend); // push metoda returna novu duzinu arraya

// friends.unshift("Ja"); // dodaje element na pocetak i unshit isto vraca broj elemenata u arrayu
// console.log(friends);

// // remove ulements / UKLANJANJE ELEMENATA
// friends.pop(); // suprotno od pusha uklanja zadnji element iz arraya. popu ne triba nikakav argument. ne vraca broj elemenata VEC UKLONJENI ELEMENT
// console.log(friends);
// friends.shift(); // shift uklanja prvi element ova metoda kao i POP vraca uklonjeni element
// console.log(friends);

// console.log(friends.indexOf("Ante")); // IndexOf da pronademo index od nekog elementa INCLUDES JE BOLJA
// console.log(friends.includes("Ante")); // vraca true ili false

/**
 * CODING CHALLENGE #2
 */
// const calcTip = (bill) => {
//   if (bill > 50 && bill < 300) {
//     return 0.15 * bill;
//   } else {
//     return 0.2 * bill;
//   }
// };
// // console.log(calcTip(40));

// const bills = [125, 555, 44];

// const tips = new Array();
// const total = new Array();
// // console.log(tips);

// for (i of bills) {
//   tips.push(calcTip(i));
//   total.push(i + calcTip(i));
// }
// console.log(tips, total);

/**
 * INTRODUCTION TO OBJECTS
 */
// za objekte koristimo viticaste zagrade
// prije tocke su PROPERTYi a iza tocke VALUEs
// ovde poredak nema veze objekte koristimo za nestrukturiranje podatke
// const ante = {
//   firstName: "Ante",
//   lastName: "Marsic",
//   age: 32,
//   job: "frontend developer",
//   friends: ["Pave", "Danica", "Jure", "Izabela"],
//   hasDriverLicence: true,
// };

// /**
//  * DOT vs. BRACKET NOTATION
//  */
// // koristiti TOCKA NOTACIJU ne komplicirat
// console.log(ante);
// console.log(ante.lastName);
// console.log(ante["firstName"]);

// const nameKey = "Name";
// console.log(ante["first" + nameKey]);
// console.log(ante["last" + nameKey]); // ovo nece radit s tocka notacijom
// console.log(
//   "---------------------------------------------------------------------------------"
// );
// const interestedIn = prompt("Sta zelite znati i Anti???");

// if (ante[interestedIn]) {
//   console.log(ante[interestedIn]);
// } else {
//   console.log("wrong request!");
// }

// ante.location = "Split";
// ante["instagram"] = "antemarsic_";

// console.log(
//   `${ante.firstName} has ${ante.friends.length} and his best friend is ${ante.friends[0]}`
// );

/**
 * OBJECT METHODS
 */
// unutar objekta mozemo imati objekt
// const ante = {
//   firstName: "Ante",
//   lastName: "Maršić",
//   birthYear: 1991,
//   job: "Programmer",
//   friends: ["Danica", "Jure", "Pave", "Izabela"],
//   hasDriverLicence: false,
//   calcAge: function () {
//     console.log(this);
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     // return this.hasDriverLicence
//     //   ? `${this.firstName} is a ${this.age}-year old ${this.job}, and has a driver's licence`
//     //   : `${this.firstName} is a ${this.age}-year old ${this.job}, and has no driver's licence`;

//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     } and he has ${this.hasDriverLicence ? "a" : "no"} driver's licence `;
//   },
// };

// // console.log(ante.calcAge(1996)); --> ovo nije bas dobro

// console.log(ante.calcAge());
// console.log(ante.getSummary());

/**
 * CODING CHALLENGE #3
 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     // console.log(this.mass, typeof(this.mass));
//     return this.mass / (this.height * this.height);
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// console.log(
//   mark.calcBMI() > john.calcBMI()
//     ? `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`
//     : `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})` // NISAM DODA AKO SU ISTI!!!!!!!!!!!!!!!!!
// );

/**
 * ITERATION: THE FOR LOOP
 */
// FOR petlja se vrti dok je uvjet ISTINIT
// for (let rep = 5; rep < 10; rep++) {
//   console.log(`lifting wights repetiotion: ${rep}`);
// }

/**
 * LOOPING ARRAYS, BREAKING AND CONTINUING
 */
// const anteArray = [
//   "Ante",
//   "Marsic",
//   2037 - 1991,
//   "teacher",
//   ["Danica", "Jure", "Pave", "izabela"],
// ];

// const types = [];

// for (let i = 0; i < anteArray.length; i++) {
//   console.log(anteArray[i], typeof anteArray[i]);
//   // types[i] = typeof anteArray[i];
//   types.push(types[i]);
// }
// console.log(types);

// const yearss = [1991, 2007, 1969, 2020];
// const agess = [];

// for (let i = 0; i < yearss.length; i++) {
//   agess.push(2037 - yearss[i]);
// }
// console.log(agess);

// continue and break
// const anteArray = [
//   "Ante",
//   "Marsic",
//   2037 - 1991,
//   "teacher",
//   ["Danica", "Jure", "Pave", "izabela"],
// ];

// for (let i = 0; i < anteArray.length; i++) {
//   if (typeof anteArray[i] !== "string") continue;

//   console.log(anteArray[i], typeof anteArray[i]);
// }

// for (let i = 0; i < anteArray.length; i++) {
//   if (typeof anteArray[i] === "number") break;

//   console.log(anteArray[i], typeof anteArray[i]);
// }

/**
 * LOOPING BACKWARDS AND LOOPS IN LOOPS
 */
// const anteArray = [
//   "Ante",
//   "Marsic",
//   2037 - 1991,
//   "teacher",
//   ["Danica", "Jure", "Pave", "izabela"],
// ];

// for (let i = anteArray.length - 1; i >= 0; i--) {
//   console.log(anteArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------------------- starting exercise ${exercise}`);
//   for (let k = 1; k < 6; k++) {
//     console.log(`ponavljanje broj ${k}`);
//   }
// }

/**
 *  WHILE LOOP
 * */
// u while mozemo samo uvjet specificirati
// let rep = 0;
// while (rep <= 10) {
//   console.log(`ponavljanje br ${rep}`);
//   rep++;
// }

// let six = false;

// while (!six) {
//   let dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);
//   if (dice === 6) {
//     six = true;
//   }
// }

/**
 * CODING CHALLENGE 4
 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   if (bill > 50 && bill < 300) {
//     return 0.15 * bill;
//   } else {
//     return 0.2 * bill;
//   }
// };

// const toPay = () => {
//   for (let i = 0; i < bills.length; i++) {
//     let tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(bills[i] + tip);
//   }
//   return tips, totals;
// };

// const calcAverage = (arr) => {
//   let billsSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     billsSum += arr[i];
//   }
//   billsAverage = billsSum / arr.length;
//   return billsAverage;
// };

// console.log(toPay());
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
