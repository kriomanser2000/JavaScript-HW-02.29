// 1.
//Запросіть у користувача його ім’я та виведіть у відповідь
//«Привіт, (його ім’я)!».
//--
//var userName = prompt("Enter your name: ");
//alert("Hello, " + userName + "!");

// 2.
//Запросіть у користувача його рік народження, підрахуйте
//скільки йому років і виведіть результат. Поточний рік
//вкажіть у коді як константу.
//--
//var currentYear = new Date().getFullYear();
//var birthYear = prompt("Enter your age: ");
//birthYear = parseInt(birthYear);
//var age = currentYear - birthYear;
//alert("You " + age + " old years.");

// 3.
//Запросіть у користувача довжину сторони квадрата та
//виведіть його периметр.
//--
//var sideL = prompt("Enter the length of the side of the square: ");
//sideL = parseFloat(sideL);
//var perim = 4 * sideL;
//alert("The perimeter of the square is " + perim + " cm");

// 4.
//Запросіть у користувача радіус кола та виведіть його площу.
//--
//var radius = prompt("Enter circle radius: ");
//radius = parseFloat(radius);
//var area = Math.PI * radius * radius;
//alert("Circle area is " + area);

// 5.
//Запросіть у користувача відстань у кілометрах між двома
//містами та за скільки годин він хоче дістатися. Порахуйте
//швидкість, з якою потрібно рухатися, щоб встигнути вчасно.
//--
//var distance = prompt("Enter distance in kilometers between the two cities: ");
//distance = parseFloat(distance);
//var time = prompt("Enter the time you want to get there (in hours): ");
//time = parseFloat(time);
//var speed = distance / time;
//alert("You need to move with speed " + speed + " km/h.");

// 6.
//Реалізуйте конвертор валют. Користувач вводить долари,
//рограма конвертує у євро. Курс валюти зберігайте у константі.
//--
//const exchangeRate = 0.85;
//var usd = prompt("Enter how much dollars: ");
//usd = parseFloat(usd);
//var eur = usd * exchangeRate;
//alert(usd + " dollars in " + eur.toFixed(2) + " euros."); 

// 7.
//Користувач вказує обсяг флешки у ГБ. Програма має під-
//рахувати скільки файлів розміром 820 МБ вміститься на флешку.
//--
//var flashGB = prompt("Enter amount Flash Drive in GB: ");
//flashGB = parseFloat(flashGB);
//var sizeMB = 820;
//var flashGB = flashMB * 1024;
//var numOfFiles = Math.floor(flashMB / sizeMB);
//alert("In flash drive, amount " + flashGB + " GB can use " + numOfFiles + " files 820MB.");

// 8.
//Користувач вводить суму грошей у гаманці та вартість
//однієї шоколадки. Програма виводить скільки шоколадок
//може купити користувач і скільки здачі в нього залишиться.
//--
//var wallet = prompt("Enter money sum from wallet: ");
//wallet = parseFloat(wallet);
//var chocoPrice = prompt("Enter chocolate price: ");
//chocoPrice = parseFloat(chocoPrice);
//var numOfChoco = Math.floor(wallet / chocoPrice);
//var change = wallet % chocoPrice;
//alert("You can buy " + numOfChoco + " chocolates, and you have " + change.toFixed(2) + " uah.");

// 9.
//Запросіть у користувача тризначне число і виведіть його
//паліндром (число-перевертень). Для вирішення завдання
//вам знадобиться оператор % (залишок від ділення).
//--
//var number = prompt("Enter three-digit number: ");
//if (number.length !== 3)
//{
//    alert("You need enter three-digit number!");
//}
//else
//{
//    var digit1 = parseInt(number.charAt(0));
//    var digit2 = parseInt(number.charAt(1));
//    var digit3 = parseInt(number.charAt(2));
//    var palindrome = digit3 * 100 + digit2 * 10 + digit1;
//    alert("Number palindrome is " + number + " = " + palindrome);
//}

// 10.
//Запросіть у користувача ціле число і виведіть у відповідь
//парне або непарне. В завданні використовуйте логічні
//оператори і не використовуйте if та switch.
//--
var number = prompt("Enter full number: ");
number = parseInt(number);
var result = (number % 2 === 0) ? "pair" : "not pair";
alert("You entered " + result + " number.");