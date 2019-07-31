"use strict"
function timer(date) { 
    let a = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    let b = a - date;
    return Math.round((b / 60000) * 100) / 100;
}
let c = new Date();
console.log(timer(c));


function stopwatch(date) { 
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
let x = new Date();
console.log(stopwatch(x));


function dayOfTheWeek(date) {
    let arr = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота'];
    return arr[date.getDay()];
}
let y = new Date(2019, 7, 31);
console.log(dayOfTheWeek(y));


let d = prompt('Введите дату рождения 1990-10-01', '');
function birthDays(dateOfBirthDay) {
    let м = new Date(Date.parse(dateOfBirthDay))
    let g = new Date();
    м.setFullYear(+g.getFullYear());
    if (м <= g) {
        м.setFullYear(+м.getFullYear() + 1);
      }
    let ms = 24*60*60*1000;
    let h =  Math.round((+м - g) / ms);
    return alert(h  + ' дней до вашего дня рождения');
}
console.log(birthDays(d));