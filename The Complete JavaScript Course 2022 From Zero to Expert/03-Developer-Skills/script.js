// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const ime = 'ivan';
// console.table(`${ime} je moje imeaaaaaaa`);

/** INSTALACIJA NODEa I LIVE SERVERA
 * node -v --> provjera node verzije
 * npm install live-server -g --> instalacija live servera GLOBALNO
 * live-server --> pokretanje live servera
 */

/** LEARNING HOW TO CODE
 * dobro razumit kod koji pisemo i nikada ne kopirati kod!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *  https://www.codewars.com/
 * sam kodirati i raditi svoje projekte
 * web development se non stop mijenja... dolazi nova tehnologija stalno
 */

/** HOW TO HINK LIKE A DEVELOPER: BECOME A PROBLEM SOLVER!
 * razumijeti problem 100% sve pitati sta znaci, sta triba vratit itd....
 * veliki problem razbiti u puno malih problemcica
 * ne bojat se puno istrazivati
 * napisat pseudo kod prije pravog koda (PSEUDO KOD INFORMATIVNI OPIS PRAVOG KODA KOJI CEMO NAPISATI)
 */

/** USING GOOGLE, STACKOWERFLOW and MDN
 *
 */

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// debugger; // imamo i funkciju debugger
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// console.table(temperatures);

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

/** DEBUGING WITH THE CONSOLE AND BREAKPOINTS
 * BREAKPOITS --> source --> script.js otvorit --> pa kliknit do broja
 */

/**
 * CODING CHALLENGE #1
 */

// 1 UNDERSTANDING THE PROBLEM
// array transformed to string, separated by ...
// what is X day? Answer : index + 1
// 2 BREAKING UP INTO SUB-PROBLEMS
// transform array into string
// transform each element to string with celzijus
// strings needs to contain day (index + 1)
// Add ... between elements and start and end of string
const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}°C in ${i + 1} days...`);
  }
};

printForecast([17, 21, 23]);
