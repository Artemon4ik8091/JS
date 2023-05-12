window.addEventListener("DOMContentLoaded", (event) => {
    // var fname = prompt("Как вас зовут?");
    // var lname = prompt("Как ваша фамилия?");
    
    // firstname.innerHTML = fname;
    // lastname.innerHTML = lname;

    // console.log(firstname.innerHTML);
    // console.log(lastname.innerHTML);

    // var usernumber = prompt("Введите число");
    // usernumber = usernumber * usernumber;
    // console.log(usernumber);
    
    // var usernumber = prompt("Введите число 1");
    // var usernumber2 = prompt("Введите число 2");
    // usernumber3 = (usernumber*1 + usernumber2*1)/2;
    // console.log(usernumber3);

    // const miles = 0.621371;
    // var usernumber = prompt("Сколько километров");
    // console.log("Это будет " + usernumber * miles + " миль");

    // var fleshka = prompt("Сколько флешка?");
    // var fleshkaFiles = (fleshka*1000) / 820;
    // console.log("Это будет " + fleshkaFiles + " файлов на флешке");

    // var money = prompt("Сколько денег?");
    // var chocoPrice = prompt("Сколько денег стоит шоколадка?");
    // var chocolateCount = Math.trunc(money/chocoPrice);
    // var moneyChange = money % chocoPrice;
    // console.log("Это будет " + chocolateCount + 
    // " шоколадок, а останется "+ moneyChange + " денег");

    // var number = 573;
    // var first = Math.trunc(number / 100);
    // var second = Math.trunc((number % 100) / 10);
    // var third = (number % 100) % 10;
    // console.log(number + " -> " + third+second+first);

     var number = 573;
    // console.log(number % 2 == 1 ? "нечетное" : "четное");
    console.log(['Even', 'Odd'][number * number % 2]);
});
