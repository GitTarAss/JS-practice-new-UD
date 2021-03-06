'use strict';
// Система контроля версий => Git
/*
// После работы в проекте в конце дня нужно заливать всю инфу на GitHub такими командами:

1 - git status
2 - git add -A
3 - git commit -a -m"first commit"
4 - git push

Каждый раз перед началом работа если вы или ктото работает над проектом вместе с вами нужно прописывать:
- для того чтобы с удаленного сервера сенхронизитовать все данные на ваш ПК

01 - git pull 

*/
/* 
Преимущиства:
1. Легко сохранять все изминения и контрольные точки что позволяет вернутся на предадущий шаг или больше.
    Легко искать инфу по логам ы в любой момент можно откатить проект в конкретную точку
2. Нет лишнего копирования данних (статичиских файлов в проекте) + копия вашего проекта хранится в ее одном месте (на облоке)
3. С репазиторием может одновременно работать много розроботчиков.
*/

/*
При начале роботы над проекто в новой папке (проекте) нужно:

1. ////Comand////  git init   // Инициировать репозиторий в котором мs сейчас работаем (чтобы создавать контрольные точки проекта который помещен в этой папке)

2.1 ////Comand////  git config --global user.name "Taras"   // Прописываем кто пользуется и будет комитить свою работу
2.2 ////Comand////  git config --global user.email slipetstp83@gmail.com   // Глобальные настройки для всего ПК. Прописываем кто пользуется и будет комитить свою работу
2.01 ////Comand////  git config --local user.name "Taras"   // Прописываем кто пользуется и будет комитить свою работу
2.02 ////Comand////  git config --local user.email slipetstp83@gmail.com   // Локальные настройки для конкретной папки. Прописываем кто пользуется и будет комитить свою работу
*/

/*
// Три состояния репозитория - Git:
- Файл только создан
- Git cледит за определенным файлом
- Создана контрольная точка в Git (commits) 

////Comand//// git status  // Чтобы просмотреть статус файлов в репозитории нужно прописать:

// No commits yet - Пока нет коммитов
// Untracked files: - Не следит ни за какими файлами (файлы написани красным)

////Comand//// git add -A  // Добавление всех файлов (all) в отслеживание => git add -A
 
// Changes to be committed: - файлы добавлены для отслежевания в репозитории (название файлов уже зеленое)
// Чтобы добавить конкретный файл или группу файлов нужно прописать => "git add *.css" Все файлы с розшырением .css или => "git add main.css" Добавить файл main.css 

////Comand////  git commit -a -m"first commit"  // Команда для создания контрольной точки в Git (commits); -m"first commit" это описание что изменялось в файлах 
// Теперь при необходимости в нее можно вернутся

////Comand////  git log  // Посмотреть на созданные комити, кто создал, кода, описание изминений

////Comand////  git checkout --file.name   // Збросить все изминения которые сделаны в файле до предыдущего комита

*/
/////////////////////////////////////////////////////////////////////
/*
Чтоби создать новый репозиторий на удаленном сервере нужно:
- Зайти на GitHub и создать там New repository
- Вибрать команди для привязки вашех папок на ПК

////Comand////  git remote add origin https://github.com/GitTarAss/JS-practice-new-UD.git
// Ми привезали нашу папку на ПК в конкретной папке на GitHub
////Comand////  git push -u origin master  // Переноси (пушем) файлы с ПК на GitHub 

////Comand////  git push  // Эта команда добавляет все файли в репозиторий на GitHub так как выше мы прописали -u что указало путь для сохнанения

////Comand////  git pull   // Добавить, сенхронизовать данные с онлайн репозитория на ПК

*/

