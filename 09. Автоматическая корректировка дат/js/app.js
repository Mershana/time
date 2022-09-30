'use strict'

// Разница между объектами с датой в JavaScript
/* №1⊗jsPmTmDOD
Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года. */
/* let now = new Date('2000-09-01');
let date = new Date('2010-02-15');

let diff = now - date;
console.log(diff);  *///-298425600000

/* №2⊗jsPmTmDOD
Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях. */

/* let now = new Date('2000-09-01');
let date = new Date('2010-02-15');

let dayMilSec = 86400000;
let diff = (now - date) / dayMilSec ;

console.log(diff);  */// 3454


/* №3⊗jsPmTmDOD
Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах. */
/* let now = new Date('2000-09-01');
let date = new Date('2010-02-15');

let dayMilSec = 86400000;

let diff = ((now - date) / dayMilSec) ;
let day = diff / 30;
console.log(day); */

/* №4⊗jsPmTmDOD
Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах. */
/* let now = new Date('2000-09-01');
let date = new Date('2010-02-15');

let dayMilSec = 86400000;

let diff = ((now - date) / dayMilSec) ;
let day = diff / 365;
console.log(day); */  //9.463013698630137