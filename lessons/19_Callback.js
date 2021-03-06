'use strict';

/* коллбэк — это функция, которая должна быть выполнена после того,
 как другая функция завершила выполнение (отсюда и название: callback – функция обратного вызова).
 Если функции в коде идут одна за другой это не значит что они также выполняются попорядку
*/ 

function first() {
    // Чтото делать (Выводить цыфру 1) Do something
    setTimeout(function() {  // Делает задержку на 0,5сек. выполнение функции
        console.log(1);
    }, 500 ); // 500 мс или 0,5 сек
}

function second () {
    console.log(2);
}

first();
second();

///////////////////////////////////////////////

// Главный шаблон callback функции: то что в другую функцию в качестве аргумента в будущем мы сможем передать другую функцию
function learnJS(lang, callback) { 
    console.log(`Я учу: ${lang}`); // Интерполяция строк js шаблон `строка текста ${аргумент или выражение} строка текста` https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings
    callback(); // Вызываем callback функцию чтобы выполнить ее указаную как аргумент
    // Тоисть теперь только посте того как выполнится первая функцмя => ${lang} выполнится вторая => callback()
}

///////// Варыант 1 /////////////// Анонимная функция
learnJS("JavaScript", function() {  // Теперь на практике запускаем функцию => learnJS Пишем строку ("JavaScript", и передаем функцию => function() - она анонимная так как в скобках мы не пишем ее названия
    console.log("Я прошел этот урок!") // Выодим в консоль то что выполняет эта функция
    // Первое сообщения: => Я учу: JavaScript - за ним второе => Я прошел этот урок!
}); // "function() { ... }" - Это все является Аргументом
// Така как мы сюда передали анонимную функцию после выполнения она исчезнет. Но сюда можна передавать и конкретную функцию

////////// Варыант 2 /////////////// Функция с именем 
function done() { // создаем уде осознаную функцию с иминеи. 
    console.log("Я прошел третий урок!"); // В нее помещаеи что нужно вывести
}
learnJS("JavaScript", done); // Вызываем теперь эту функцию. 
// Функция => done без () потому что мы туда передали просто функцию 


