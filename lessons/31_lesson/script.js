'use strict'; // Режим сучасного кода!

// Такое событие не используется так как есть намного функцеональней вариант
// const btn = document.querySelector('button');
// btn.onclick = function() {
//     alert('Click');
// };

// Событие №1 при нажатии вывести сообщение Click
// btn.addEventListener('click', () => { // Оброботчик события - addEventListener(); название события 'click'; дальше стрелочная функция () => {};
//     alert("Click"); // вывести надпись "Click"
// });

// Событие №2 при нажатии вывести сообщение Click_2
// btn.addEventListener('click', () => { // Все выполняется по порятку стачала первое событие потом это
//     alert("Click_2"); // вывести надпись "Click_2"
// });

// Событие №3 при наводе мышки на елемент 
// btn.addEventListener('mouseenter', () => { 
//     console.log("Hover"); // вывести надпись "Hover"
// });

// Событие №4 при наводе мышки на елемент 
// btn.addEventListener('mouseenter', (event) => { // чтобы получить какието данные о елементе с которым мы взаимодействуем нужно прописать событие как аргумент в колбек функцию (event);
//     console.log(event.target); // target - доступ к елементу который сработал
//     event.target.remove(); // удалить этот елемент который мы получили (в нашем случаи кнопку)
// });

// Событие №5 при нажатии на елемент 
// btn.addEventListener('click', (event) => { // чтобы получить какието данные о елементе с которым мы взаимодействуем нужно прописать событие как аргумент в колбек функцию (event);
//     event.target.remove(); // удалить этот елемент который мы получили (в нашем случаи кнопку)
// });


// Событие №6 Функция Delete(Remove) 
/*
let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
    //event.target.remove();
};

btn.addEventListener('click', deleteElement);
*/

//////////////////////////////////////////////////

// const btn = document.querySelector('button'),
//       overlay = document.querySelector('overlay');

// let i = 0;
// const deleteElement = (event) => {
//     console.log(event.target);
//     console.log(event.type); // тип события что произошел 
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');

link.addEventListener('click', (e) => { // Стрелочная функция (можна также ее прописать 'click', function(e) {})
    e.preventDefault(); // отменить стандартное поведение бравзеа

    console.log(e.target); // после отмены стандартного поведения взаиможействуем елементом (выводим в консоль)
});

/////////////////////////////////////////////////////
// чтобы на несколько елементов вешать одинаковые оброботчики событий //

const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type); // тип события что произошел 
};

const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click', deleteElement, {once: true}); // {once: true} - обект в котором {один раз: действительно}
// type - тип события; listener - оброботчик события; [, options])- Объект options, который определяет характеристики объекта;
    });




