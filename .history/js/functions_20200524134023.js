
// startGame - функция начать игру
function startGame() {	// удаляем стартовый блок
	removeStartBlock();
	// создаем Блок таймера в Информационном блоке
	createTimerBlock();
	// Создаём блок Жизней на игровом поле
	createLifesBlock();
	// это означает, что игра запущена
	game = true;
	// Создаём блок Счётчик очков на игровом поле
	createPointCounter();
	// функция установки таймаута (задержка на некоторе время в нашем
	// случае 1 секунда или 1000 мс), функция запускается один раз
	setTimeout(function () {	// создаём шарик
		createBall();
		// запускаем функцию стаймером
		timerGame();
	}, 1000);
}
// endGame - функция конец игры
function endGame(statusGame) {	// это означает, что игра остановлена
	game = false;
	// остановить тамер
	clearInterval(timergame);
	// удаляем все шарики
	removeAllBall();
	//удаляем таймер
	removeTimerBlock();
	// Удаляем блок Жизней на игровом поле
	removeLifesBlock();
	// Удаляем блок Счётчик очков на игровом поле
	removePointCounter();
	// обнулить таймер снова до стартового время отсчёта
	timerBlock.innerText = durationGame;
	// создаем блок статуса и выводисобщение о победе или проиграше
	createStatusBlock(statusGame);
	setTimeout(function () {	// удаляем статус блок
		removeStatusBlock();
		// создаём финишный блок
		createFinishBlock();
	}, 3000);
	setTimeout(function () {	//удаляем финишный блок
		removeFinishBlock();
		// создаём стартовый блок
		createStartBlock();
	}, 7000);
}
// timerGame - фунция счетчика запускает обратный отсчёт на экране
function timerGame() {
	timergame = setInterval(function () {	// ведём обратный отсчёт таймера
		timerBlock.innerText--;
		// если таймер достиг нуля то:
		if (timerBlock.innerText == 0) {	// вызываем функцию конец игры
			endGame("lose");
		}
	}, 1000);
}
// функция реакции шарика на мышь
function mouseBall(thisBall) {	// Если игра еще идет, то:
	if (game) {
		if (thisBall.className != "ball to-delete") {
			thisBall.remove();
			var ball = document.querySelector(".ball");
			if (ball == null) {
				var numberBall = random(5);
				while (numberBall) {
					createBall();
					numberBall--;
				}
			}
		}
		// увеличиваем счёт игры на еденицу
		pointSum = pointSum + 1;
		// увеличиваем счёт игры на рандомное число
		//pointSum = pointSum + random(5);
		// меняем текст счёта игры	
		pointCounter.innerText = pointSum;
		// если счёт игры стал 15, то:
		if (pointSum == points) {	// вызываем функцию конец игры
			endGame("win");
		}
		thisBall.className = "ball to-delete";
	}
}

/*=====================================*/
/* Функции для создания элементов игры */
/*=====================================*/
/* Функция создания стартового блока:
	<div id="start-block">
		<button class="start-button"></button>
	</div>
*/
function createStartBlock() {	// создаём блок див <div id="start-block"></div>
	startBlock = document.createElement("div");
	// добавлянм тегу div => id = "start-block"
	startBlock.id = "start-block";
	// Создаем кнопку <button class="start-button"></button>
	startButton = document.createElement("button");
	// добавлянм тегу button => class = "start-button"
	startButton.className = "start-button";
	// добавляем событие на кнопку старта - запустить игру
	startButton.onclick = startGame;
	// добавляем кнопку в стартовый блок
	startBlock.appendChild(startButton);
	// добавляем стартовый блок на игровоеполе <div id="game-field"></div>
	gameField.appendChild(startBlock);
}
// createPointCounter - функция СОЗДАНИЯ блока Счётчика на игровом поле
//<div id="point-counter"></div>
function createPointCounter() {	// создаём блок div
	pointCounter = document.createElement("div");
	// добавлянм тегу div => id = "point-counter"
	pointCounter.id = "point-counter";
	// задаём начально значение Счётчика
	pointSum = 0;
	// Присваем блоку pointCounter значение суммы игры
	pointCounter.innerText = pointSum;
	// добавляем Счётчик очков на Игровое поле
	gameField.appendChild(pointCounter);
}
// createLifes - функция СОЗДАНИЯ шариков Жизней на Игровом поле
function createLifes(id) {	// создаем количество шарико жизней 
	var thislife = document.createElement("span");
	// добавлянм тегу div => id = "span"
	thislife.id = "span" + id;
	// добавляем блоку Жизней блок Жизнь
	lifesBlock.appendChild(thislife);
}
// createLifesBlock - функция СОЗДАНИЯ блока Жизней
// <div id="lifes-block">Жизни: <span></span><span></span><span></span></div>
function createLifesBlock(curretLifesSum = 5) {	// создаём блок div <d = 5iv id="lifes-block">
	lifesBlock = document.createElement("div");
	// добавлянм тегу div => id = "lifesBlock"
	lifesBlock.id = "lifes-block";
	// curretLifesSum- переменная в которой храним текущее количество жизней
	// присваивем ей суммарное количество жизней в игре (см. файл с переменными)
	if (curretLifesSum != lifesSum) { lifesSum = curretLifesSum; }
	// цикл по созданию жизней 
	// он будет добавлять жизнь до тех пор пока переменная curretLifesSum не будет равн 0
	while (curretLifesSum) {	// Создаем шарик жизни
		//createLifes(curretLifesSum);
		// создаем количество шарико жизней 
		var thislife = document.createElement("span");
		// добавлянм тегу div => id = "span"
		thislife.id = "span";
		// добавляем блоку Жизней блок Жизнь
		lifesBlock.appendChild(thislife);

		//уменшаем переменную curretLifesSum на 1
		curretLifesSum--;
	}
	// добавляем блок жизней на игровоеполе
	gameField.appendChild(lifesBlock);
}
// createTimerBlock - функция СОЗДАНИЯ блока Таймера
//<h2>Время: <span id="timer"></span></h2>
function createTimerBlock() {	// создаём блок-заголовок h2
	var h2 = document.createElement("h2");
	// добавляем блоку-заголовку h2 текст
	h2.innerText = "Время: ";
	// добалвяем блоку Таймера тег span
	timerBlock = document.createElement("span");
	// добавлянм тегу span => id = "timer"
	timerBlock.id = "timer";
	// задаем Таймеру стартовое время отсчёта
	timerBlock.innerText = durationGame;
	// добавляем в блок-заголовок h2 блок таймера
	h2.appendChild(timerBlock);
	// добавляем в информационный блок блок-заголов h2
	// (в котором уже находится блок тамера)
	infoBlock.appendChild(h2);
}
// createBall - функция СОЗДАНИЯ шарика на Игровом поле
// <div id="ball"></div>
function createBall() {	// создаём блок div
	var thisBall = document.createElement("div");
	numberId++;
	var thisId = numberId;
	// добавлянм тегу div => id = "ball"
	thisBall.id = "ball" + thisId;
	thisBall.className = "ball";
	// функция clickBall вызывет вункцию обработки действипри нажатии
	//thisBall.onclick = function(){mouseBall(thisBall);}
	thisBall.onmousemove = function () { mouseBall(thisBall); }
	var thisTop = null;
	var thisLeft = null;
	var nextTop = null;
	var nextLeft = null;
	var finishTop = null;
	var finishLeft = null;
	switch (Math.floor(Math.random() * Math.floor(8))) {
		case 0:
			thisTop = randomXY(200, 500);
			thisLeft = -100;
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(30, 300);
					finishTop = 500;
					finishLeft = randomXY(300, 700);
					break;
				case 1:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(300, 570);
					finishTop = randomXY(200, 500);
					finishLeft = 700;
					break;
			}
			break;

		case 1:
			thisTop = randomXY(-100, 200);
			thisLeft = -100;
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(30, 300);
					finishTop = -100;
					finishLeft = randomXY(300, 700);
					break;
				case 1:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(300, 570);
					finishTop = randomXY(-100, 200);
					finishLeft = 700;
					break;
			}
			break;

		case 2:
			thisTop = -100;
			thisLeft = randomXY(-100, 300);
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(300, 570);
					finishTop = randomXY(200, 500);
					finishLeft = -100;
					break;
				case 1:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(300, 570);

					finishTop = 500;
					finishLeft = randomXY(-100, 300);
					break;
			}
			break;

		case 3:
			thisTop = -100;
			thisLeft = randomXY(300, 700);
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(30, 300);
					finishTop = randomXY(200, 500);
					finishLeft = 700;
					break;
				case 1:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(30, 300);
					finishTop = 500;
					finishLeft = randomXY(300, 700);
					break;
			}
			break;

		case 4:
			thisTop = randomXY(-100, 200);
			thisLeft = 700;
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(300, 570);
					finishTop = -100;
					finishLeft = randomXY(-100, 300);
					break;
				case 1:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(30, 300);
					finishTop = randomXY(-100, 200);
					finishLeft = -100;
					break;
			}
			break;

		case 5:
			thisTop = randomXY(200, 500);;
			thisLeft = 700;
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(300, 570);
					finishTop = 500;
					finishLeft = randomXY(-100, 300);
					break;
				case 1:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(30, 300);
					finishTop = randomXY(200, 500);
					finishLeft = -100;
					break;
			}
			break;

		case 6:
			thisTop = 500;
			thisLeft = randomXY(300, 700);
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(30, 300);
					finishTop = randomXY(-100, 200);
					finishLeft = 700;
					break;
				case 1:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(30, 300);
					finishTop = -100;
					finishLeft = randomXY(300, 700);
					break;
			}
			break;

		case 7:
			thisTop = 500;
			thisLeft = randomXY(-100, 300);
			switch (Math.floor(Math.random() * Math.floor(2))) {
				case 0:
					nextTop = randomXY(60, 200);
					nextLeft = randomXY(300, 570);
					finishTop = -100;
					finishLeft = randomXY(-100, 300);
					break;
				case 1:
					nextTop = randomXY(200, 400);
					nextLeft = randomXY(300, 570);
					finishTop = randomXY(-100, 200);
					finishLeft = -100;
					break;
			}
			break;
	}
	thisBall.style.top = thisTop + "px";
	thisBall.style.left = thisLeft + "px";
	//запускаем таймер с интервалом в 200 мсек. и:
	setTimeout(function () {
		thisBall.style.opacity = "1";
		thisBall.style.top = nextTop + "px";
		thisBall.style.left = nextLeft + "px";
		setTimeout(function () {
			thisBall.style.opacity = "0";
			thisBall.style.top = finishTop + "px";
			thisBall.style.left = finishLeft + "px";
			setTimeout(function () {	// если шарик находится в финишной точке, то:
				if ((thisBall.offsetTop == finishTop) || (thisBall.offsetLeft == finishLeft)) {	// уменьшаем количество пойманых шаров (т.к. дальше они добавятся наместо)
					pointSum--;
					// уменьшаем количество жизней на единицу
					lifesSum--;
					// если количество жизней не равно 0, то:
					if (lifesSum) {	// удаляем блок жизней
						removeLifesBlock();
						// создаем новыйблок жизней с четом текущего количества жизней
						createLifesBlock(lifesSum);
						// вызываем фенкцию обработки движениямыши а шарике
						// т.к. эта функция провод ряд проверок и удаляет шарики
						// тут есть pointSum++
						mouseBall(thisBall);
					}
					// иначе
					else {	// вызвать функцию окончания Игры
						pointSum++; // ВРЕМЕННО
						endGame("lose");
					}
				}
			}, 3000);
		}, 2000);
	}, 1500);
	// добавляем шарик на игровое поле <div id="game-field"></div>
	gameField.appendChild(thisBall);
}
// функция создания финишного блока
function createFinishBlock() {	// соpдаём блок <div id="finish-game"></div>
	var finishBlock = document.createElement("div");
	finishBlock.id = "finish-game";
	// создаём блок <h3>Вы набрали: 100 очков</h3> 
	var h2 = document.createElement("h3");
	h2.innerText = "Вы набрали: " + pointSum + " очков";
	// добавляем заголовок h3
	finishBlock.appendChild(h2);

	//Добавляем блок финиш игра на игровое поле
	gameField.appendChild(finishBlock);
}
// функция создания финишного блока
function createStatusBlock(statusGame) {	// соpдаём блок <div id="finish-game"></div>
	var statusBlock = document.createElement("div");
	statusBlock.id = "status-block";
	// если игрок победил, то:
	if (statusGame == "win") {	// показываем картинку победителя
		statusBlock.style.backgroundImage = "url('img/you-win.jpg')";
	}
	// если нет, то:
	else {	// то присваиваем картинку проигравшего
		statusBlock.style.backgroundImage = "url('img/you-lose.jpg')";
	}
	//Добавляем блок финиш игра на игровое поле
	gameField.appendChild(statusBlock);
}


/*=====================================*/
/* Функции для удаления элементов игры */
/*=====================================*/
// Функция удаления стартового блока
function removeStartBlock() {	// удаляем стартовый блок
	startBlock.remove();
}
// removeBall - функция УДАЛЕНИЯ шарика с Игрового поля
function removeBall(thisBall) {	//делаем шарик прозначнам	
	thisBall.style.opacity = "0";
	// удаляем шарик
	thisBall.remove();
}
// removeAllBall - функция УДАЛЕНИЯ всех оставшихся шариков на Игровом поле
function removeAllBall() {
	while (numberId) {
		var thisId = numberId;
		var thisBall = document.getElementById("ball" + thisId);
		if (thisBall != null) {
			thisBall.remove();
			removeLifesBlock();
		}
		numberId--;
	}
}
// removePointCounter - функция УДАЛЕНИЯ блока Счётчика на игровом поле
function removePointCounter() {
	pointCounter.remove();
}
// removeTimerBlock - функция УДАЛЕНИЯ блока Таймера
function removeTimerBlock() {
	timerBlock.remove();
	var h2 = document.querySelector("h2");
	h2.remove();
}
// removeLifesBlock - функция УДАЛЕНИЯ блока Жизней
function removeLifesBlock() {
	lifesBlock.remove();
}
//функция удаления финишного блока
function removeFinishBlock() {
	finishBlock = document.querySelector("#finish-game");
	finishBlock.remove();
}
// функция удаления блока статуса победы игры
function removeStatusBlock() {
	statusBlock = document.querySelector("#status-block");
	statusBlock.remove();
}



// random - функция получения случайного числа
function random(max) {	// определяем случайное число от 0 до max
	var randomNumber = 1 + Math.random() * (max);
	{	// округляем до целого числа
		randomNumber = Math.floor(randomNumber);
		// возвращаем резултат
		return randomNumber;
	}
}
