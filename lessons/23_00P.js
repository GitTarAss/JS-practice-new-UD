'use strict';

let str = "some";
let strObj = new String(str); // в JS преметивный тип данных (строка) превращается в (объект) и после работы с ним опять возвращаем (строку)

console.log(typeof(str)); // Получаем строку => string
console.log(typeof(strObj)); // Получаем объект => object

/////////////////////////////////////////////////////

const soldier = {  // Переменная солдат
    health: 400,   // свойство здорове
    armor: 101,     // свойство броня
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = {  // Переменная конкретный солдат jonh
    health: 200  // здорове слабее чем у стандартного солдата
};

// старый вариант уже не используется
//код// jonh.__proto__ = soldier; // Установили прототипом jonh <=soldier
// Новый метод прототипирования 
Object.setPrototypeOf(jonh, soldier); //  jonh <=soldier

jonh.sayHello(); // вызываем функцию из прототипа soldier в =>jonh  // выведется =>Hello

console.log(jonh); // выведется { health: 200 }
console.log(jonh.armor); // выведется =>101 подтягивает данные от soldier

////////////////////////////////////////////////////

const soldier1 = {  // Переменная солдат
    health: 400,   // свойство здорове
    armor: 101,     // свойство броня
    sayHello1: function() {
        console.log('Hello');
    }
};

const jonh1 = Object.create(soldier1); // Создаем новый обект =>jonh1 который будет прототипно наследоватся от =>soldier1

jonh1.sayHello1(); // вызываем функцию из прототипа soldier1 в =>jonh1  // выведется =>Hello