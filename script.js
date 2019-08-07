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

function daysToBirthday(){
    let birthData = prompt('Введите дату рождения в формате ГГГГ-ММ-ДД');
    let today = new Date();
    let birthday = new Date(Date.parse(birthData));
    let data = birthday.setFullYear(today.getFullYear());
    if(data > today){
        birthday.setFullYear(+today.getFullYear());
    }
    return Math.round((birthday.getTime()-today.getTime())/(24*60*60*1000));
};
alert(daysToBirthday() + ' дней до дня рождения');