'use strict'; // Режим сучасного кода!

//console.log(document.body); // Обращаемся к дереву document; Получение код <body>...</body> через JavaScript
//console.log(document.head); // получаем код что написан в теге <head>...</head>
//console.log(document.documentElement); // Работа с тегами <html>...</html> с всем что в нем есть вложено

// console.log(document.body.childNodes); // childNodes - Узлы которые являються детьми у body


//console.log(document.body.firstChild); // метод firstChild выводит первого ребенка от родителя 
//console.log(document.body.firstElementChild); // метод firstElementChild выводит первого ребенка от родителя (исключая переносы, только елементы)

// console.log(document.body.lastChild); // метод lastChild выводит последнего ребенка от родителя 
//console.log(document.body.lastElementChild); // метод lastElementChild выводит последнего ребенка от родителя (исключая переносы, только елементы)

//console.log(document.querySelector('#current').parentNode); // Получить родителя конкретного елемента #current

//console.log(document.querySelector('#current').parentNode.parentNode); // Получить родителя второго уровня (родителя родителя current)
//console.log(document.querySelector('#current').parentNode.parentElement); // Получить родителя второго уровня (родителя родителя current)

//console.log(document.querySelector('[data-current="3"]').nextSibling);
// получить следующий за ним елемент - .nextSibling 

//console.log(document.querySelector('[data-current="3"]').previousSibling); 
// Получить придыдущего соседа

//console.log(document.querySelector('[data-current="3"]').nextElementSibling); 
// Получить следующий елемент исключая переносы

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') { // есле при переборе мы наткнемся на #text то не нужно с ним ничего делать, а просто продолжить перебор
        continue;
    }

    console.log(node);
}