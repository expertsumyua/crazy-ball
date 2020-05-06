
// random - функция получения случайного числа
function randomXY(min, max)
{	// определяем случайное число от 0 до max
	var coordinate = Math.random()*(max - min) + min;
	// округляем до целого числа
	coordinate = Math.round(coordinate);
	// возвращаем резултат
	return coordinate;
}

function coordinateTop(number)
{
	switch (number)
	{
		case 'T0':
			top = randomXY(200, 500);
		break;

		case 'T1':
			top = randomXY(-100, 200);
		break;

		case 'T2':
			top = -100;
		break;

		case 'T3':
			top = -100;
		break;

		case 'T4':
			top = randomXY(-100, 200);
		break;

		case 'T5':
			top = randomXY(200, 500);
		break;

		case 'T6':
			top = 500;
		break;

		case 'T7':
			top = 500;	
		break;

		case 'N0':
			top = randomXY(200, 400);
		break;

		case 'N1':
			top = randomXY(60, 200);
		break;

		case 'N2':
			top = randomXY(60, 200);
		break;

		case 'N3':
			top = randomXY(200, 400);
		break;
	}	
	return top;
}
function coordinateLeft(number)
{
	switch (number)
	{
		case 'T0':
			left = -100;
		break;

		case 'T1':
			left = -100;
		break;

		case 'T2':
			left = randomXY(-100, 300);
		break;

		case 'T3':
			left = randomXY(300, 700);
		break;

		case 'T4':
			left = 700;
		break;

		case 'T5':
			left = 700;
		break;

		case 'T6':
			left = randomXY(300, 700);
		break;

		case 'T7':
			left = randomXY(-100, 300);
		break;

		case 'N0':
			left = randomXY(30, 300);
		break;

		case 'N1':
			left = randomXY(30, 300);
		break;

		case 'N2':
			left = randomXY(300, 570);
		break;

		case 'N3':
			left = randomXY(300, 570);
		break;
	}	
	return left;
}