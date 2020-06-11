'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

//console.dir(box); // ствойства в style: это inline свойства тоисть у них самый высокий приоритет и они перебивают другие правила
/*
box.style.backgroundColor = 'blue'; // Обращаемся к елементу =>box его обекту =>style и дальше свойство которое хотим изменить
box.style.width = '500px';
*/

box.style.cssText = 'background-color: green; width:500px'; // Можно записывать несколько стилей формат как в CSS

// box.style.cssText = `background-color: green; width: ${какаято переменная}`; // Также можно прописывать денамичиские переменные

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red'; // Всегда прописовать номер обекта к которому обращаеммся так как все елементы идут масивом

/* // Цыкл изминение цвета у нескольких елементов одновременно
for (let i = 0; i < hearts.length; i++) { // => і = 0; так как в массивах все идет попорядку и начинается с нулевого индекса
// цыкл будет работать до тех пор пока не закончутся елементы в массиве => i < hearts.length;
    hearts[i].style.backgroundColor = 'blue'; // чтобы чтото сделать с массивом обрашаемся к ниму и переменной i; => hearts[i]
}
*/
// Перебирающие методы для изминения цвета у нескольких елементов одновременно
hearts.forEach(item => { // в внутерь передаем callback функцию называя ее item =>
    item.style.backgroundColor = 'pink';
});

const div = document.createElement('div'); // создаем новый елемент document.createElement('div')
// елемент находится только в нутри js файла а не в html

//// const text = document.createTextNode('Тут был я'); // переменная text

div.classList.add('black'); // берем наш блок div; .classLits - свойсьво; .add - действие (метод); ('black')-Клас который создан в CSS стилях

document.body.append(div); // добавляем блок в конец страницы =>body (всегда нужно прописывать действие относительно кокогото конкретного елемента)
// Метод .append() вставляет указанное содержимое как последний элемент

////document.querySelector('.wrapper').append(div); // получение переменных которые используються только один раз ее необезательно помещать в другую переменную
// ('.wrapper') получение елемента с класом .wrapper и сразу пременяем к ниму метод .append(div)

//// wrapper.prepend(div); // Метод .prepend() добавляет текст в начало блока
// .appendChild - старая команда

//// hearts[0].before(div); // вставить перед какимто елементом
//// wrapper.insertBefore(div, hearts[1]); // розместить елемент div перед hearts[1] - старый вариант

//// hearts[0].after(div);  // вставить после какогота елемента

//// circles[0].remove(); // удалить елемент с страницы [какой именно]
//// wrapper.removeChild(hearts[1]); // через родителя (wrapper) удалить поделемент (.removeChild) и указывали какой именно (hearts[1]) - старый метод

/// hearts[0].replaceWith(circles[0]);  // .replaceWith - заменить один елемент другим; hearts[0] заменяем на (circles[0])
wrapper.replaceChild(circles[0], hearts[0]); // replaceChild - заменить; елемент на який потрыбно помыняти circles[0]; елемент який потрыбно замынити hearts[0] - старий метод

div.innerHTML = 'Hello World'; // innerHTML - вставить HTML код в блок Div

//// div.textContent = 'Hello'; // textContent - вставляет только текст в блок

div.insertAdjacentHTML('beforebegin', '<h2>Hallo</h2>'); // сначала указываем елемент над которым будем проводить изминения =>div
// Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется относительно опорного элемента.
// beforebegin - вставляет елемент прямо перед елементом с которым мы работаем =>div
// afterbegin - вставляет код в начало елемента
// beforeend - вставляет код в конец елемента
// afterend - вставляет елемент прямо после елементом с которым мы работаем =>div
