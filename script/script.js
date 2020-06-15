'use strict';

function game() {
    function random() {
        return Math.floor(Math.random() * 100);
    }
    let randomInt = random();
    console.log('randomInt: ', randomInt);
    function start() {
        let que = prompt("Угадайте число от 1 до 100");
        if (que == undefined) {
        alert("Ну ладно");
    } else if (que < randomInt) {
        alert("Загаданное число больше. Попробуйте еще");
        start();
    } else if (que == randomInt) {
        alert(`Вы победили! Загаданное число действиетельно ${randomInt}`);
    } else if (que > randomInt) {
        alert("Загаданное число меньше. Попробуйте еще");
        start();        
    }
    }
    start();

}
game();