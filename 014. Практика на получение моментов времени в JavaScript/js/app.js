/* 'use strict'
Практика на получение моментов времени в JavaScript */

/* №1⊗jsPmTmTMT
Определите, сколько секунд прошло с начала дня до настоящего момента времени. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
console.log((now - date) / 1000);  */ //50608

/* №2⊗jsPmTmTMT
Определите, сколько секунд осталось до конца дня. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
console.log((now - date) / 1000); */ //35735.038

/* №3⊗jsPmTmTMT
Определите, сколько дней осталось до нового года. */
/* let date1 = new Date('2022, 08, 10');
let date2 = new Date('2023, 01, 01');
let millisecondsPerDay = 86400000;
console.log((date1 - date2) / millisecondsPerDay); */ // 144

/* №4⊗jsPmTmTMT
Определите, сколько пятниц 13-е в текущем году. */
/* for (let friday of arrayOfFridaythe13thsIn(2022))
  console.log(
    friday.toLocaleString(undefined, { day: "numeric", month: "long" })
  );

function arrayOfFridaythe13thsIn(year) {
  let array = [];
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13);
    if (d.getDay() == 5) {
      array.push(d);
    }
  }
  return array;
}
 */

/* №5⊗jsPmTmTMT
Определите, какой год был 3 месяца назад. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth() -3, now.getDate());
console.log(date); */

/* №6⊗jsPmTmTMT
Определите, какой день недели будет в последнем дне текущего месяца. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(31));
console.log(date);  */ //среда

/* №7⊗jsPmTmTMT
Напишите код, который будет определять, високосный ли текущий год. */
/* let date = new Date();
if (date.getDate() == 29) {
	console.log('високосный');
} else {
	console.log('обычный');
} */

/* №8⊗jsPmTmTMT
Напишите код, который будет находить предыдущий високосный год. */
/* let now = new Date();

for (let year = now.getFullYear(); year >= 0; year--) {
  let date = new Date(year, 2, 0);
  if (date.getDate() == 29) {
    console.log(year);
    break;
  }
}
 */

/* №9⊗jsPmTmTMT
Напишите код, который будет находить следующий високосный год. */
/* let now = new Date();

for (let year = now.getFullYear(); year >= 0; year++) {
  let date = new Date(year, 2, 0);
  if (date.getDate() == 29) {
    console.log(year);
    break;
  }
} */