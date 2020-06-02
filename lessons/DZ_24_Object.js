'use strict'; // Режим сучасного кода!

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // /Задние №1 начало
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', " "); // В зависимость какой ответ на вопрос ввел пользователь будем выводить результат в глобальную переменную => personalMovieDB.count;
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { // Логика цыкла: Проверяем неправдивые условия. Если хотя одно сработает задаем вопрос опять.
            // '' - Пустая строка; null - отменяет действие; isNaN - не число;
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', " "); // Если хотя одно из условий сработало повторяем вопрос
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {   
            const a = prompt('Один из последних просмотренных фильмов?', ''); // Прописываем действыя которые нужно делать
            const b = prompt('На сколько оцените его?', '');
        
        if (a != null && a != '' && b != null && b != '' && a.length < 50) {
                console.log('done');
            } else {
                console.log('error');
                i--; // Если условия не выполнелось то возвращаемся на одно повторение (одну итерацию) назад
        }  
        } 
    },
    detectionPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {  //Передаем аргумент во внутрь функции => hidden
        if (!hidden) { // если не скрыта
            console.log(personalMovieDB); // вывести в консоль 
        }
    },
    // /Задние №1 конец
    // //Задние №2 начало
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    // //Задние №2 конец
    // /Задние №3 начало 
    /*
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) { 
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) { // '' - Пустая строка; null - отменяет действие;
                console.log('Вы ввели некоректные данные или не ввели вообще');
                i--; // возврат на один крок назад
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
           }
          personalMovieDB.genres.forEach((item, i) => { // item- каждый елемент в массиве который перебираем;  i- номер по порядку
                console.log(`Любимый жанр ${i + 1} - это ${item}`); // Добавляем к i+1 чтобы ответ пользователя заносился в базу понятным образом, а не начиная с нуля =>${i + 1}
          });
    }
    // /Задние №3 конец */

        // /Задние №3.1 начало
        writeYourGenres: function() {
            for (let i = 1; i < 2; i++) {                  
                
                let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase(); // => .toLowerCase() превтатить все что ввели в нижний регистр. чтобы правильно сортировалось в базе

            if (genres === '' || genres == null) { // '' - Пустая строка; null - отменяет действие;
                console.log('Вы ввели некоректные данные или не ввели вообще');
                i--; // возврат на один крок назад
                } else {
                personalMovieDB.genres = genres.split(', '); // отсортировать 
                personalMovieDB.genres.sort(); // отсортировать все по алфавиту
            }
               }
              personalMovieDB.genres.forEach((item, i) => { // item- каждый елемент в массиве который перебираем;  i- номер по порядку
                    console.log(`Любимый жанр ${i + 1} - это ${item}`); // Добавляем к i+1 чтобы ответ пользователя заносился в базу понятным образом, а не начиная с нуля =>${i + 1}
              });
        }
        // /Задние №3.1 конец
};