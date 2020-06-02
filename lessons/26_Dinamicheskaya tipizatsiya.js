'use strict'; // Режим сучасного кода!

// Динамичиская типизация - Это возможность одного типа данных превращатся в другой

// To String ///////////////////////////////////////
//////////////
// 1) Команда String - старый вариант почти не используют

console.log(typeof(String(null))); // Узнать какой тип данных выводится =>typeof; Команда =>(String(null)) превращает null в строку
// в консоль выводится =>string
// если убрать typeof то консоль выведет в консоль строку в которой будет писать =>null
console.log(typeof(String(4)));
// в консоль выводится =>string; если убрать typeof то консоль выведет =>4

////////////
// 2) Метод concat() - чтото складывать со строкой

console.log(typeof(null + '')); // при сложении со строкой всегда тип данных всегда будет строка
// в консоль выводится =>string
console.log(typeof(4 + ''));
// в консоль выводится =>string

const num = 5;

console.log("http://vk.com/catalog/" + num); 
// в консоль выводится =>http://vk.com/catalog/5

console.log(typeof("http://vk.com/catalog/" + num));
// в консоль выводится =>string

const fontSize = 26 + 'px'; // также будет строка которую можна помещать например в стили СSS

console.log(fontSize);
// в консоль выводится =>26px

// To Number //////////////////////////////////////
/////////////

// 1) Команда Number - старый вариант почти не используют 
console.log(typeof(Number('4'))); // Узнать какой тип данных выводится =>typeof; Команда =>(Number('4')) превращает строку '4' в число
// в консоль выводится =>number

console.log(typeof(Number(null)));
// в консоль выводится =>number

////////////
// 2) Унарный плюс "+"
console.log(typeof(+'4')); // при добавлении перед строкой унарного плюса тип данных будит number
// в консоль выводится =>number

let answ = +prompt("Hello", ""); // все что мы получаем от пользователя всегда будет типом данных строка
// если поставить +перед prompt то ответ пользователя будет как число

////////////
// 3) Команда => parseInt

console.log(typeof(parseInt("15px", 10))); // 
// в консоль выводится =>number

console.log(parseInt("15px", 10)); // первое значение выводит из строки номер обоехая px; второе число =>10 указывает десетичную системму 
// в консоль выводится =>15

// To boolean ////////////////////////////////////////
/////////////
// 1) всегда false // 0, '', null, undefined, NaN; 

let switcher = null; // переменной switcher пресваиваем =>null а это в логическом контексте =>false

if (switcher) {
    console.log('Working...'); // в консоль ничего не выведется так как switcher = null(false)
}

switcher = 1; // переменной switcher пресваиваем => 1 а это в логическом контексте =>true

if (switcher) {
    console.log('Working...'); // В консоль выведется Working...
}

/////////////
// 2) Команда => Boolean очень редко используется

console.log(typeof(Boolean('4')));
// в консоль выводится =>boolean - логический тип данных

console.log(Boolean('4'));
// в консоль выводится =>true - логический тип данных

console.log(Boolean(''));
// в консоль выводится =>false - логический тип данных

//////////////
// 3) Перед строкой ставим два знака отрецания => !!"string"

console.log(typeof(!!'4'));
// в консоль выводится =>boolean - логический тип данных

console.log(!!'4');
// в консоль выводится =>true - логический тип данных