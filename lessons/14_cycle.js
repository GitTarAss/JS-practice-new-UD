'use strict';

//// Вариант цыкла №1 через while (если)

let num1 = 50; // Переменная num1 = 50;

while (num1 <= 55) {    // Пока наше условие не выполнется увеличевать на +1 переменную num
    console.log(num1); // В консоль выведется 50 51 52 53 54. 
    num1++;            // Чтобы выводилось и 55 нужно поставтьть '<='
}

//// Вариант цыкла №2 через do. Сначала говорим что делать, а потом проверяем

let num2 = 50; // Переменная num2 = 50;

do {                      // Сначала ввывести в консоль значение num2 если не совпадает, то добавляем +1 и проверяем еще раз
    console.log(num2);
    num2++;
}
while (num2 <= 55);

//// Вариант цикла №3_1 через for

let num3 = 50;
for (let i = 1; i <= 8; i++) {  // Сначала указываем переменную i = 1; (сокращенно ітератор) с чено начать цикл. Аргумент условия
    // Потом прописываем сколько нужно сделать цыклов i <= 8;
    // И третье условие шаг цикла, увеличение после каждого прохождения цикла на +1
    console.log(num3); // В консоли выведется: 50 51 52 53 54 55 56 57
    num3++;
    // В етом цыкле будет 7 повторений, так как мы ориентируемся на переменную => i а не на => num
}

//// Вариант цикла №3_2

let num03 =50;
for (let i = 50; i <= 55; i++) {  // Сначала указываем переменную i = 50; (сокращенно ітератор) с чено начать цикл. Аргумент условия
    // Потом прописываем сколько нужно сделать цыклов. До i <= 55;
    // И третье условие шаг цикла, увеличение после каждого прохождения цикла на +1
    console.log(num03); // В консоли выведется: 50 51 52 53 54 55
    num03++;
}

///////////////////////////

///// Досрочное завершение цикла => break;

for (let i = 1; i < 10; i++) {
    if (i === 6){  // Условие => if (eсли) переменная (і === 6) то розорвать выполнение цикла
        break;  // Прирвать цикл на етапе когда і=6;
    }

    console.log(i);  // В консоли выведется: 1 2 3 4 5 
}

///// Досрочное завершение цикла => continue

for (let a = 1; a < 10; a++) {
    if (a === 6){  // Условие => if (eсли) переменная (і === 6) то пропустить етот шаг и продолжать цикл без него
        continue;  // continue; - Пропустить тот шаг который нам не нужен, но не прерывает цикл
    }

    console.log(a);  // В консоли выведется: 1 2 3 4 5 _ 7 8 9
}