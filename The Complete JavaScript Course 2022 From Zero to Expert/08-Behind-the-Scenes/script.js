'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   // console.log(firstName);

//   function printAge() {
//     const output = `You are ${age} born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var milenial = true; // var varijable su function scope
//       const str = `Oh, and you're a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(milenial);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Ante';
// calcAge(1991);

/**
 * HOISTING
 */
// znaci da su neke varijable dostupne/usable u kodu prije nego su deklarirane
// VARIJABLE DEFINIRAT NA VRHU SCOPA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// window je global object

/**
 * THIS KEYWORD
 */
// this je specijalna varijabla kreirana za svaki execution context
// "this" --> je undefined
// arrow funkcije nemaju this?????? arrow funkcije nemaju svoj this vec od parenta i zato u njima this nece raditi
//console.log(this);

const ante = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};

ante.calcAge();

// mozemo posudit metodu iz jednog objekta drugom objektu
// NIKADA KORISTITI ARROW FUNKCIJU KAO METODU!!!!!!!!!!!!!!!!!!!!!!!!
const matilda = {
  year: 2017,
};

matilda.calcAge = ante.calcAge;
matilda.calcAge();

// ARGUMENTI SU ONO STA ZADAJEMO KADA DEFINIRAMO FUNKCIJU ovde je to "a,b"
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

/**
 * PRIMITIVES VS OBJECTS
 */
// primitives se spremaju u CALL STACKu a objects (reference type) se spremaju u HEAPu

// KADA KOPIRAMO OBJEKT U BITI SAMO KREIRAMO NOVU VARIJABLU KOJA POINTA U ISTI OBJEKT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

// kopiranje objekta
// object.assing --> merga 2 objekta i vraca novi
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: '27',
  family: ['Alice', 'Bob'],
};

// shallow copy npr kao ovde ako priminimo array u jednom objektu minja se i u drugome
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2);
console.log(jessicaCopy);

jessicaCopy.family.push('Ante');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
