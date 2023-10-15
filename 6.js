const fs = require('fs');
const path = require('path');

const Path_for_html = 'C:/Users/Кирилл/Desktop/js/html';
const String = 'ddd';

//Создаем переменную где будем хранить файлы подхлдящие под условие html и htm
var htmlFiles = fs.readdirSync(Path_for_html).filter(
    file => {
    return file.endsWith('.html') || file.endsWith('.htm');
    });

//Теперь необходимо пройтись по всем файлам чтобы узнать содержиться ли в них наша строка
htmlFiles.forEach(
    file => {
    const content = fs.readFileSync(path.join(Path_for_html, file), 'utf-8');
    //Выбираем подстроки подходяшие под условие регулярного выражения
    const tags = content.match(/<p.*?>.*?<.p.*?/g);

    //Проходимся по подстрокам и проверем есть ли в них подстрока подходящая под наше условие
    let count = 0;
    tags.forEach(tag => {
        if (tag.includes(String)) {
            count++;
        }
    });

    console.log('В файле '+file+' найдено '+count+' параграфов, содержащих '+String);
});