'use strict'
// Форматирование даты в JavaScript

/* №1⊗jsPmTmDF
Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости. */
function addZero(num){
	if (num >= 0 && num <= 9){
		return '0' + num;
	} else {
		return num;
	}
}

let date = new Date();

console.log(
	date.getHours() + ':' +
	date.getMinutes() + ':' +
	date.getSeconds() + ' ' +
	addZero(date.getDate()) + '.' +
	addZero(date.getMonth() + 1) + '.' +
	addZero(date.getFullYear())
)

