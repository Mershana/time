'use strict'

// Проверка корректности даты в JavaScript
/* №1⊗jsPmTmDCCh
Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января: */

/* console.log(checkDate(2025, 0, 31)); // выведет true */
/* console.log(checkDate(2025, 0, 32)); // выведет false */

function cheackDate(year, month, day){
	let date = new Date(year, month, day);
	if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day){
		console.log(true);
	} else {
		console.log(false);
	}
}
cheackDate(2025, 0, 31); //true
cheackDate(2025, 0, 32); //false