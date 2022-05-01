//Завдання 2

let number = prompt("Введіть число від 0 до 9 включно")
switch (number) {
   case "0":
      alert(")")
      break;

   case "1":
      alert("!")
      break;

   case "2":
      alert("@")
      break;

   case "3":
      alert("#")
      break;

   case "4":
      alert("$")
      break;

   case "5":
      alert("%")
      break;

   case "6":
      alert(":")
      break;

   case "7":
      alert("&")
      break;

   case "8":
      alert("*")
      break;

   case "9":
      alert("(")
      break;
}


//Завдання 6
let amount = prompt("Введіть суму грошей в USD")
let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
switch (currency) {
   case '1':
      alert(amount * 0.95 + ' EUR');
      break;
   case '2':
      alert(amount * 30.25 + ' UAH');
      break;
   case '3':
      alert(amount * 1.70 + ' AZN');
      break;
}


//Завдання 9 
let figure = prompt("В якої фігури всі сторони та кути рівні? 1-квадрат 2-прямокутник 3-трикутник");
let capital = prompt("Яка столиця Австралії 1-Сідней 2-Канберра 3-Мельбурн ");
let city = prompt("Яке найбільше місто України 1-Львів 2-Дніпро 3-Київ");
let score = 0;
if (figure == 1)
   score += 2;
if (capital == 2)
   score += 2;
if (city == 3)
   score += 2;
alert('Твої набрані бали за правильні відповіді ' + score);


//Завдання 7 
let amountPurchase = prompt('Введіть суму Вашої покупки');
if (amountPurchase >= 200 && amountPurchase < 300)
   alert(amountPurchase / 100 * 97 + '$ знижка 3%');
else if (amountPurchase >= 300 && amountPurchase < 500)
   alert(amountPurchase / 100 * 95 + '$ знижка 5%');
else if (amountPurchase >= 500)
   alert(amountPurchase / 100 * 93 + '$ знижка 7%');

// Завдання 4 

let year = prompt('Введіть рік');
if (year % 4 == 0 && year % 100 !== 0) {
   alert('Високосний рік');
}
else
   alert('Невисокосний рік');


//Завдання 1

let age = prompt("Введіть Ваш вік")

if (age >= 0 && age < 2) {
   alert("Ви дитина")
}

else if (age >= 12 && age < 18) {
   alert("Ви підліток")
}
else if (age >= 18 && age < 60) {
   alert("Ви дорослий")
}
else if (age >= 60) {
   alert("Ви пенсіонер")
}

