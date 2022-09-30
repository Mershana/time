"use strict";

// Получение моментов времени в JavaScript

// День текущего года
/* №1⊗jsPmTmTMG
Определите, какой день недели будет 31 декабря текущего года. */
/* let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);
console.log(date.getDay()); */ //суббота

// День текущего месяца
// №2⊗jsPmTmTMG
// Определите, какой день недели будет 1 числа текущего месяца.
/* let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 1)
console.log(date); */ //понедельник

// День следующего или предыдущего года
/* №3⊗jsPmTmTMG
Определите, какой день недели будет 31 декабря следующего года. */
/* let now  = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
console.log(date); */

/* №4⊗jsPmTmTMG
Определите, какой день недели будет через год в такую же дату, как сегодня. */
/* let now  = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
console.log(date); */ //четверг

/* №5⊗jsPmTmTMG
Определите, какой день недели был год назад в такую же дату, как сегодня. */
/* let now  = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
console.log(date); */ //вторник

// День следующего или предыдущего месяца
/* №6⊗jsPmTmTMG
Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц. */
/* let now = new Date('2021-00-01');
let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
console.log(date.getDay());  */ //судя по всему будет

/* №7⊗jsPmTmTMG
Определите, какой день недели был месяц назад в такой же день месяца, как сегодня. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth() -1, now.getDate());
console.log(date); */ //воскресенье

// Разность моментов
/* №8⊗jsPmTmTMG
Определите, сколько дней между 1 января и 10 сентября текущего года. */
/* let date1 = new Date('2022, 09, 10');
let date2 = new Date('2023, 01, 01');
let millisecondsPerDay = 86400000;
console.log((date1 - date2) / millisecondsPerDay); */ //113

/* №9⊗jsPmTmTMG
Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего. */
/* let date1 = new Date('2022, 08, 20');
let date2 = new Date('2022, 09, 20');
let millisecondsPerDay = 86400000;
console.log((date1 - date2) / millisecondsPerDay); */ // 31

// Момент времени дня
/* №10⊗jsPmTmTMG
Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let millisecondsPerHour = 3600000;
console.log((now - date) / millisecondsPerHour);  */

// Начало дня
/* №11⊗jsPmTmTMG
Определите, сколько часов прошло между началом дня и текущим моментом времени. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
let millisecondsPerHour = 3600000;
console.log((now - date) / millisecondsPerHour);  */

// Конец дня
/* №12⊗jsPmTmTMG
Определите, сколько часов осталось до конца дня. */
/* let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
let millisecondsPerHour = 3600000;
console.log((now - date) / millisecondsPerHour);  */

// Циклическая проверка
/* let now = new Date();
let year = now.getFullYear();
let date = 0

for (let year = 2000; year <= 2022; year++) {
  for (let month = 0; month <= 11; month++) {
   	date = new Date(year, month, 1);
  }
  if (date.getDay() == 0) {
    console.log(year + "-" + month + "-1");
  }
} */

/* №13⊗jsPmTmTMG */
/* Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье. */
let now  = new Date();
let year = now.getFullYear();

for (let year = 2000; year <= 2022; year++){
for (let month = 0; month <= 11; month++) {
	let date = new Date(year, month, 1);

	if (date.getDay() == 0 && date.getDay() == 6) {
		console.log(year + '-' + month + '-1');
		}
	}
}
