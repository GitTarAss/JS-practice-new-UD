'use strict';

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', " ");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 1) 

for (let i = 0; i < 2; i++) {   // (i = 0;) Переменная итератор равна нулю. (i < 2;) 
    // Указываем что цыкл закончится через два раза. (i++) увеличить на единицу
    const a = prompt('Один из последних просмотренных фильмов?', ''); // Прописываем действыя которые нужно делать
    const b = prompt('На сколько оцените его?', '');

// Цикл - варыант №2
/* let i = 0; 
while ( i <2 ) {    // Пока наше условие не выполнется увеличевать на +1 переменную num
        const a = prompt('Один из последних просмотренных фильмов?', ''), // Прописываем действыя которые нужно делать
              b = prompt('На сколько оцените его?', '');
        i++; 
}
*/
// Цикл - вариант №3
/*
 let i = 0;  // Количество прохождения цикла
    do {
         const a = prompt('Один из последних просмотренных фильмов?', '');
         const b = prompt('На сколько оцените его?', '');       
        i++;

        personalMovieDB.movies[a] = b;
         if (a != null && a != '' && b != null && b != '' && a.length < 50){
         } else {
             i--;
         }
      } while (i<2);

*/
// 2)

if (a != null && a != '' && b != null && b != '' && a.length < 50) {
    // a != null <-- a не равно нажатию на кнопку отмена
    // a != '' <-- а не равно пустой строке
    // a.length < 50 <-- количество символв должно быть не болие 50
        personalMovieDB.movies[a] = b; // Записать ответы в базу данных [a] - Свойство b; - Значение свойства    
        console.log('done');
    } else {
        console.log('error');
        i--; // Если условия не выполнелось то возвращаемся на одно повторение (одну итерацию) назад
}  
} 

// 3)
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count <= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

// С GitHub
/*
'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
*/