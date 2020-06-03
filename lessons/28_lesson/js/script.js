'use strict';

//// document.getElementById("demo"); ////
const box = document.getElementById('box'); // Id('box') - уникальный идентификатор из index.html
// обращаемся к =>document и через точку к методу =>getElementById("demo");
console.log(box);


//// document.getElementsByTagName('button'); ////
// Есле на странице только один елемент (кнопка) то она всеравно выводится в псевдо массиве
/*
const btns = document.getElementsByTagName('button'); // обращаемся к псевдомассиву button (колекции кнопок)
console.log(btns); //Получаем весь массив кнопок
*/

// вывод конкретной кнопки Вариант №1
/*
const btns = document.getElementsByTagName('button')[1]; // чтобы обратится к конкретной кнопке из псевдо массива нужно в квадратных скобках [1] прописать ее номер идентификатора
console.log(btns); // Получаем только вторую кнопку
*/

// вывод конкретной кнопки Вариант №2

const btns = document.getElementsByTagName('button'); 
console.log(btns[3]); // чтобы обратится к конкретной кнопке из псевдо массива нужно в квадратных скобках [3] прописать ее номер идентификатора


//// document.getElementsByClassName(); ////
const circles = document.getElementsByClassName('circle'); // обращаемся к елементу и пытаемся получить все елементы через определенный Class
console.log(circles);


//// document.querySelectorAll(); ////
const hearts = document.querySelectorAll('.heart'); // Во внутерь помещаем CSS селектор. Так как это селектор перед ним ставим точку "."

hearts.forEach(item => { //псевдо масив hearts; метод .forEach; и во внутерь передаем callback функцию
    console.log(item); // виводит в консоль все елементы отдельно а не масивом
});


//// document.querySelector(); //// вывод только первый елемента

const oneHeart = document.querySelector('.heart'); // Выводит только один елемент со страницы. И тот елемент который попал первым тот и идет в переменную
    console.log(oneHeart);


