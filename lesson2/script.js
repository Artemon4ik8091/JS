window.addEventListener("DOMContentLoaded", (event) => {
    // var number = prompt("Введите число");    // Задача 1
    // if(number > 0) 
    //     console.log("Число больше 0");
    // if(number == 0) 
    //     console.log("Число равно 0");
    // if(number < 0) 
    //     console.log("Число меньше 0");

    // var age = prompt("Введите ваш возраст");   // Задача 2
    // if (age < 0 || age > 120)
    //     console.log("Вы все врете!");
    // else
    //     console.log("Ваш возраст " + age);

    // var number = Math.abs(prompt("Введите число"));  // Задача 3
    // console.log("Модуль числа " + number);

    // var time = prompt("Введите время в 24 часовом формате (например, 05:12:46)");  // Задача 4
    // var timeMassive = time.split(":");
    // if (timeMassive[0] >= 0 && timeMassive[0] < 24)
    // {
    //     if (timeMassive[1] >= 0 &&  timeMassive[1] < 60 )
    //     {
    //         if (timeMassive[2] >= 0 && timeMassive[2] < 60)
    //         {
    //             console.log("Вы указали время правильно");
    //         }
    //         else
    //         {
    //             console.log("Вы указали секунды неправильно");
    //         }
    //     }  
    //     else
    //     {
    //         console.log("Вы указали минуты неправильно");
    //     }          
    // }
    // else
    // {
    //     console.log("Вы указали часы неправильно");
    // }

    // var x = prompt("Введите координату по x");   // Задача 5
    // var y = prompt("Введите координату по y");

    // if (x == 0 && y == 0)
    //     console.log("Вы в точке начала координат");
    // if (x == 0 && y != 0)
    //     console.log("Вы находитесь на оси y");
    // if (x != 0 && y == 0)
    //     console.log("Вы находитесь на оси x");
    // if (x > 0 && y > 0)
    //     console.log("Вы находитесь в правой верхней четверти координатной сетки");
    // if (x > 0 && y < 0)
    //     console.log("Вы находитесь в правой нижней четверти координатной сетки");
    // if (x < 0 && y < 0)
    //     console.log("Вы находитесь в левой нижней четверти координатной сетки");
    // if (x < 0 && y > 0)
    //     console.log("Вы находитесь в левой верхней четверти координатной сетки");    

    // var monthNumber = prompt("Введите номер месяца");   // Задача 6
    // switch(monthNumber)
    // {
    //     case "1": console.log("January"); break;
    //     case "2": console.log("February"); break;
    //     case "3": console.log("March"); break;
    //     case "4": console.log("April"); break;
    //     case "5": console.log("May"); break;
    //     case "6": console.log("June"); break;
    //     case "7": console.log("July"); break;
    //     case "8": console.log("August"); break;
    //     case "9": console.log("September"); break;
    //     case "10": console.log("October"); break;
    //     case "11": console.log("November"); break;
    //     case "12": console.log("December"); break;
    //     default: console.log("No equal month");
    // }

    // var number1 = Number(prompt("Введите первое число"));  // Задача 7
    // var sign = prompt("Введите знак операции, например +, -, /, *");
    // var number2 = Number(prompt("Введите второе число"));

    // switch(sign)
    // {
    //     case "+": console.log(number1 + number2); break; //  console.log((number1*1) + (number2*1));
    //     case "-": console.log(number1 - number2); break;
    //     case "*": console.log(number1 * number2); break;
    //     case "/": console.log(number1 / number2); break;
    //     default: console.log("Можно использовать только +, - , *, /");
    // }

    // var number1 = Number(prompt("Введите первое число"));  // Задача 8
    // var number2 = Number(prompt("Введите второе число"));
    // number1 > number2 ? console.log(n1) : console.log(n2);

    // var number1 = Number(prompt("Введите первое число"));  // Задача 9
    // number1 % 5 == 0 ?  console.log(number1 + " кратно 5") :  console.log(number1 + " не кратно 5");

    // var planetName = prompt("Введите название планеты");  // Задача 10
    // planetName == "Земля" || planetName == "земля" ? console.log("Привет, землянин!") : console.log("Привет, инопланетянин!");
    

    //DZ10

    // var day = Number(prompt("Укажите день"));
    // var month = Number(prompt("Укажите месяц"));
    // var year = Number(prompt("Укажите год"));
    // var errorDate = false;
    // var longMonth = [1,3,5,7,8,10,12];
    // var shortMonth = [4,6,9,11];
    // errorDate = year > 0 && year <= 9998 ? false : true;
    // if (!errorDate)
    // {
    //     var leapYear = false;
    //     if (year % 4 == 0)
    //         if (year % 100 == 0)
    //             if (year % 400 == 0)
    //                 leapYear = true;
    //         else
    //             leapYear = true;
    // }

    // errorDate = month > 0 && month <= 12 ? false : true;
    // if (!errorDate) 
    // {   
    //     errorDate = day > 0 && day <= 31 && longMonth.includes(month) ? false : true;
    //     errorDate = day > 0 && day <= 30 && shortMonth.includes(month) ? false : true;
    //     if (leapYear)
    //     {
    //         errorDate = day > 0 && day <= 29 && month == 2  ? false : true;
    //     }
    //     else
    //     {
    //         errorDate = day > 0 && day <= 28 && month == 2 ? false : true;
    //     }     
    // }

    // day = day + 1;

    // if (day <= 31 && longMonth.includes(month) || 
    //     day <= 30 && shortMonth.includes(month) || 
    //     day <= 29 && month == 2 && leapYear ||  
    //     day <= 28 && month == 2)
    //     console.log (day + "." + month + "." + year);
    // else
    // {
    //     day = 1;
    //     month = month + 1;
    //     if (month <= 12)
    //     {
    //         console.log (day + "." + month + "." + year);
    //     }
    //     else
    //     {
    //         month = 1;
    //         year++;
    //         console.log (day + "." + month + "." + year);
    //     }
    // }
    var z = 5;
    function MyFunc( x,  y, z)
    {   
        if (x !== undefined)
            console.log(x);
        if (y !== undefined)
            console.log(y);
        for(var i = 0; i < arguments.length; i++)
        {
            console.log(arguments[i]);
        }
        z = 10;
    }
    console.log("empty");
    MyFunc();
    console.log("1");
    MyFunc(20);
    console.log("2");
    MyFunc("undefined",23);
    console.log("3");
    MyFunc(20,23,40);
    console.log("4");
    MyFunc(5645,4562,234234,6456);
    console.log(z);
});
