'use strict';

/*
Обьекты это структуры которые могут сохранять в себе любые типы данных. В формате Ключ: значение - widht: 1024px
Они могут быть вложенные: Обьекты в обьекты, массивы в обьекты
В обьектов бывают встроеные методы и встроеные свойства
Чтобы обект умел чтото делать в внутерь него мы можем записывать функции (получим методы нашего обьекта)
*/
//код// let obj = new Object()      //Метод №1 для создания обєкта (редко используется)


const options = {   // Створення обєкта з допомогою фігурних душок
    name: 'test',
    widht: 1024,    // Обєкт завжди містьть (Ключ : Значення) (Банан : Фрукт) - це є свойства обєкта
    height: 1024,
//    colors: {       // Вложеность обекта =>colors в обект =>options
//        border: 'black', 
//        bg: 'red'
//    }
};

console.log(options.name);  // виводимо суто значення name в консоль */

options.bool = false; // так можна дописувати свойства конкректного обєкта поза ним
options.colors = {  // Можна в обєкт помістити ще інший обєкт 
    border: "black",
    bg: "red"
};

delete options.bool;  //Можна удалити свойства з обєкта

console.log(options);

// цикл для перечисления всех свойств в обэкте

for (let key in options) {  //перемінна що означає кожне свойство або метод в оюєкті (let key)
                            //потім прописуєм оператор "in" і назву обєкта "options" 
/////// Вариант №1 /////////// Перебора всех свойст обекта
//код//    console.log('Свойства ' + key + ' имеет значение ' + options[key]);
// + key + кожне ствойство яке є в перемінній
// + options[key] отримати свойство тек само як було вище let(options.name)

/////// Вариант №2 /////////// Перебора всех свойст обекта
//код//    console.log(`Свойства - ${key} имеет значение: ${options[key]}`); 
// => ${options[key]} обращаемся к обекту => options. 
// В квадратные скобки прописываеи => key значение ключа который будет перебиратся каждый раз в конкретной итерации цыкла
}

/////// Вариант №3 /////////// Перебора всех свойст обекта с условием для перебора обэкта в нутри обекта
/*
for (let key in options) {
    if (typeof(options[key]) === 'object') { // Проверка типа данных на === 'object'
        for (let i in options[key]) { // Если это будет 'object' то запускаем перебор и перебираем внутри обекта (options[key]) который мы опредилили как обект
            console.log(`Свойства - ${i} имеет значение: ${options[key][i]}`);
        }
    } else { // Если key не будет обектом то сразу выводить эти данные
        console.log(`Свойства - ${key} имеет значение: ${options[key]}`); 
    }    
}
*/

////////////////// Количество свойств в обьекте ///////////////////
/////// Вариант №1 /////////// Посчитать количество всех освойст в обекте в месте с вложенныи обектом
/*
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') { // Проверка типа данных на === 'object'
        for (let i in options[key]) { // Если это будет 'object' то запускаем перебор и перебираем внутри обекта (options[key]) который мы опредилили как обект
            console.log(`Свойства - ${i} имеет значение: ${options[key][i]}`);
            counter++;
        }
    } else { // Если key не будет обектом то сразу выводить эти данные
        console.log(`Свойства - ${key} имеет значение: ${options[key]}`); 
        counter++;
    }    
}
console.log(counter); // Вывести в количество свойств в том числе вложенного обекта
*/

/////// Вариант №2 /////////// Класический способ узнать сколько свойств в обьекте (бнз вложенности другого обекта)
/*
let counter = 0;
for (let key in options) {
    counter++;
}
console.log(counter);
*/

/////// Вариант №3 /////////// Наиболие распостраненный вариант через => Object.keys
// кількість свойств в обєкті
console.log(Object.keys(options).length);  //Object - з яким обєктом ми будемо працювати
                    // .keys робота з ключами (свойствами) обєкта
                    // (options) - обєкт який передати
                    // .length - кількість наших свойств в обєкті
                    // Структура => Object.keys(options) преобразовывает свойства в массив




////////////// Моздание методов в ручную ///////////////////
// Методы это действия которые умеет создавать наш обьект
const options1 = {   // Створення обєкта з допомогою фігурних душок
    name: 'test',
    widht: 1024,    // Обєкт завжди містьть (Ключ : Значення) (Банан : Фрукт) - це є свойства обєкта
    height: 1024,
    colors: {       // Вложеность обекта =>colors в обект =>options
        border: 'black', 
        bg: 'red'
    },
    makeTest: function() {   // Ключ => makeTest: сюда мы записываем функцию
        console.log('Test'); // выводим действие в нутри функции
    }
};

options1.makeTest(); // Запускаем метод. Так как после метода стоят круглые скобки () чтото идет в работу - метод или функция


////////////// Деструктуризация объектов //////////////

const {border, bd} = options1.colors; // Создаем переменную и вытаскиваем из => options1.colors; значения => {border, bd}
console.log(border);