'use strict';

if (4 == 9) {               // Условия привращают любой тип дпнных в булиновое (boolean) значерие
    console.log('Ok!');    // Если условие правда то выводим ('Ok!')
} else {                   // Иначе выводим ('Error')
    console.log('Error');  
}

/////////////////////////////////////////////////////////////////

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Much');
} else {
    console.log('Ok!');
}

/////////////////////////////////////////////////////////////////

// Тернарный оператор. Потому что в его работе участвуют три аргумента.

const num1 = 50; // Переменная num1
(num1 == 50) ? console.log('Ok!') : console.log('Error');

// Первый аргумент - Сначала идет услвие что < (num == 50) >
// " ? " После первого аргумента ставим знак вопроса
// Второй аргумент - Если это условие верно то выводим < console.log('Ok!') >
// " : " розделяем действие которое происходит в случе правда или лош
// Третий аргумент - Если условие не верно то выводим < console.log('Error'); >

/////////////////////////////////////////////////////////////////

const num2 = 50; 

switch (num2) { // Конструкция < switch > всегда идет на строгое сравнение, в отличии от обычных условий
    case 49: 
        console.log('Not'); // Если переменная будет 49 то выводим сообщение 'Not'
        break;  // (Разрыв) После каждой проверки обезатильно прописывать < break; > Чтобы если условие сработало верно скрипт больше не проверял другие case
    case 100:
        console.log('Now');
        break;
    case 50:
        console.log('Ok');
        break;
    default:   // Действие по умолчанию, если ниодно условие не подошло.
        console.log('Not in this time');
        break;
} // В switch также можно проверять и сторки  < const num2 = 'катойто текст'; >