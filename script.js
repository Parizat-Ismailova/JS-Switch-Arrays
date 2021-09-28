/* Task #1
Разработайте программу, запрашивающую у пользователя букву латинского алфавита. 
Если введенная буква входит в следующий список (a, e, i, o или u), необходимо вывести сообщение о том, что эта буква гласная. 
Если была введена буква y, программа должна написать, что эта буква может быть как гласной, так и согласной. 
Во всех других случаях должно выводиться сообщение о том, что введена согласная буква.*/
let letter = prompt("Write the letter: ");
switch (letter){
    case "a":
    alert("Vowel");
    break;
    case "e":
        alert("Vowel");
    break;
    case "i":
        alert("Vowel");
    break;
    case "o":
        alert("Vowel");
    break;
    case "u":
        alert("Vowel");
    break;
    case "y":
        alert("Both vowel and sonovel");
    break;
    default:
        alert("Sonovel");
    break;
}

/* Task #2
Напишите программу, запрашивающую у пользователя три целых числа и выводящую их в упорядоченном виде – по возрастанию.*/
/*const numbers = [1,14,7,5,];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

/* HW #1
const JACKHAMMER = 130;
const LOWN_MOWER = 106;
const ALARM = 70;
const QUIET_ROOM = 40;

let userInput = 76;

if (userInput < QUIET_ROOM) {
  document.write("Очень тихо");
} else if (userInput === QUIET_ROOM) {
  document.write("Тихая команата");
} else if (userInput > QUIET_ROOM && userInput < ALARM) {
  document.write("Громче тихой комнаты и тише будильника");
} else if (userInput === ALARM) {
  document.write("Будильник");
} else if (userInput > ALARM && userInput < LOWN_MOWER) {
  document.write("Громче будильника тише газонокосилки");
} else if (userInput === JACKHAMMER) {
  document.write("Отбойный молоток");
} else if (userInput > LOWN_MOWER && userInput < JACKHAMMER) {
  document.write("Громче газонокосилки тише отбойного молотка");
} else {
  document.write("Очень громко!");
}
В табл. представлен уровень громкости в децибелах для некоторых распространенных источников шума. 
Уровни громкости различных источников
Отбойный молоток	130 дБ
Газовая газонокосилка	106 дБ
Будильник	70 дБ
Тихая комната	40 дБ
Создайте программу, в которой пользователь будет вводить уровень шума в децибелах. 
Если введенное им значение будет в точности совпадать с одним из значений в приведенной таблице, необходимо вывести, 
чему соответствует указанный уровень громкости. Если значение попадет между уровнями в таблице, нужно сообщить, между какими именно. 
Также программа должна выдавать корректные сообщения, в случае если введенное пользователем значение окажется ниже минимального 
или больше максимального.
*/
let levelVoice = prompt('Please, choose your voice level in db.');
switch (levelVoice) { 
    case "130":
    alert("Jackhammer");
break;
case "106":
    alert("Gas Lawn mower");
break;
case "70":
    alert("Alarm");
break;
case "40":
    alert("Quite room");
break;
default:
    alert("Wrong information");
break;
}  

/* HW #2
Напишите программу, которая будет запрашивать у пользователя номинал банкноты и отображать на экране имя деятеля, 
портрет которого размещен на соответствующем денежном знаке. Если банкноты введенного номинала не существует, 
должно выводиться сообщение об ошибке.
[Банкноты США]
Джордж Вашингтон	1
Томас Джефферсон	2
Авраам Линкольн	5
Александр Гамильтон	10
Эндрю Джексон	20
Улисс Грант	50
Бенджамин Франклин	100*/
let banknote = prompt('Please, choose your banknote.');
switch (banknote) { 
    case "1":
    alert("George Washington");
break;
case "2":
    alert("Thomas Jefferson");
break;
case "5":
    alert("Avraam Lincoln");
break;
case "10":
    alert("Alexander Gamilton");
break;
case "20":
    alert("Andrew Jackson");
break;
case "50":
    alert("Wills Grant");
break;
case "100":
    alert("Benjamin Franklin");
break;
default:
    alert("Wrong information");
break;   
}

/* HW #3
let userDay = 29;
let userMonth = "february";
let userYear = 2020;

let outputDate;
let outputMonth;
let outputYear = userYear;

switch (userMonth) {
  case "february":
    if (userYear % 4 === 0 && userDay === 29) {
      outputDate = 1;
      outputMonth = "march";
    } else if (userYear % 4 !== 0 && userDay === 28) {
      outputDate = 1;
      outputMonth = "march";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "january":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "february";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "march":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "april";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "july":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "august";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "august":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "september";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "october":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "november";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "december":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "january";
      outputYear = userYear + 1;
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  default:
    outputDate = userDay + 1;
    outputMonth = userMonth;
    break;
}

let message = `Следующая дата: ${outputDate} ${outputMonth} ${outputYear}`;

document.write(message);
Разработайте программу, принимающую на вход дату и выводящую на экран дату, следующую за ней. 
Например, если пользователь введет дату, соответствующую 18 ноября 2019 года, на экран должен быть выведен следующий день, 
то есть 19 ноября 2019 года. Если входная дата будет представлять 30 ноября, то на выходе мы должны получить 1 декабря.
 И наконец, если ввести последний день года – 31 декабря 2019-го, пользователь должен увидеть на экране дату 1 января 2020-го. 
 Дату пользователь должен вводить в три этапа: год, месяц и день. Убедитесь, что ваша программа корректно обрабатывает високосные годы.*/

let day = new Date('Apr 14, 2000');
console.log(day);
let nextDay = new Date(day);
nextDay.setDate(day.getDate()+1);
alert(nextDay);

let today = new Date(prompt('Date'));
let tomorrow = new Date(today.getTime()+(24*60*60*1000));
alert(tomorrow);

let year = prompt('Date');
let isLeap = new Date(year,2,1,-1).getDate()==29;
alert(isLeap);
