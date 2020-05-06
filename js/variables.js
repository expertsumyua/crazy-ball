
// выбираем информационный блок
var infoBlock = document.querySelector("#info-block");
// timerBlock - создаём имя блоку таймера, а создаём его
// в функции createTimerBlock() в файле main.js
var timerBlock = null;
// baseBall - создаем пременную для базового шарика и присваиваем ей все элементы
// и стили созданного шарика в файле style.css
var baseBall = document.querySelector("#ball");

// gameField - блок игрового поля
var gameField = document.querySelector("#game-field");

// pointCounter - блок Счётчика очков на игровом поле
var pointCounter = null;

// startBlock - блок началной загрузки
var startBlock = null; //document.querySelector("#start-block");
// startButton - кнопка запуска игры
var startButton = null; //document.querySelector(".start-button");


// pointSum - счёт игры
var pointSum = null;
// стартовое время 15 секунд
var durationGame = 40;
// максимально число очков в игре,
//после чего игра будет закончена
var points = 10;
// Количество мячей в игре
var SumBallGame = 0;

/**//******** ПЕРЕМЕННЫЕ для работы с блоком ЖИЗНЕЙ ***********//**/
/**//**********************************************************//**/
/**/// lifesBlock - блок жизней на игровом поле					/**/
/**/ var lifesBlock = null; 									/**/
/**//* lifesSum - Количество шариков Жизней на Игровом поле		/**/
/**/ var lifesSum = 5;					  					/**/
/**//**********************************************************//**/

// game - булевая переменная означает, идет игра или нет!
var game = null;
// id для span
var numberId = 0;