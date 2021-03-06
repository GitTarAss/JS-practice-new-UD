'use strict'; // Режим сучасного кода!

/*
/////////////////////////////////////////
ТИПЫ ДАННЫХ в JS
////// Простые типы:
1 - number - Числа - 1, 2, 3 ...
2 - string - Строки - "Набор каких-то данных которые мы просто можем описать словами. Город, Имя, Порода ... Всегда записываються в кавычки"
3 - boolean - Логический тип данных  - true/false - правда/лош
4 - null - когда чего-то просто не существует 
5 - undefined - чтото существует но значения у него нет! "Увас есть холодильник но он пустой"
6 - Symbol - символ
7 - BigInt - отображает большие числа
/////////////////////////////////////////
////// Объекты: - это колекция данных. Комплексных данных
// Спецыальные объекты:
1 - Массивы []
2 - Функции function
3 - Объект Дата
4 - Регулярные выражения 
5 - Ошибки
// Обычные объекты 
*/

// Числа - number
let numbers = 4; //целые
let numbers1 = 4.5; // дробные

console.log(4 / 0); // Выведется результат - Infinity При делении на нуль
console.log('string' * 5); //Виведется - NaN Не имеет математической логики умножать строку на число

// Строка - string

const persone = 'Alex'; // Строка обязательно записывается в кавычках ( '...', "...", `...`, )
let stringNamber = "5"; // Если число записано в кавычках то это строка

// boolean - Логический тип данных  - true/false - правда/лош

const bool = true; // да - правда
const bool1 = false; // нет - лош

// null - когда чего-то просто не существует

console.log(something); // null  Выбет ошибку что ничего не найдено, тоисть обэкта "something" не существует


// undefined - чтото существует но значения у него нет

let und;
console.log(und); // выведет undefined

// Объекты: - это колекция данных

const obj = {
    // obj {} - переменная в которую мы помищаем обэкт в унтрь фигурных скобок
    name: "Alex", // Данные в нутри объекта это - "Свойства"
    age: 25, // 
    isMarride: false
    // Действия это "Методы"
};

// Свойства объекта через квадратные кавычки ["..."] или через .точку
console.log(obj.name); // через точку
//console.log(obj["age"]); // через квадратные кавычки

//////////// Массивы [] - Масив является часным случием объекта 

let arr = ['pump.png', 'orange.jpg', 'apple.bmp', 6, [], {}]; 
// Масиы это комплексный тип данных и он может местить любые типы данных
console.log(arr[1]); // обращение к елементу масива по порядку. Нумерацыя начинается с нуля [0]




