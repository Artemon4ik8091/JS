window.addEventListener("DOMContentLoaded", (event) => {
    // 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
    // console.log(LessNumber(20,15));

    // 2. Написать функцию, которая возводит переданное число в указанную степень
    // console.log(NumberPow(2,5));

    // 3. Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
    // console.log(Calculate(10,5,'+'));
    // console.log(Calculate(10,5,'-'));
    // console.log(Calculate(10,5,'/'));
    // console.log(Calculate(10,5,'*'));
    // console.log(Calculate(10,0,'/'));
    // console.log(Calculate(10,0,'^'));

    // 4. Написать функцию, которая проверяет, является ли переданное ей число простым.
    // console.log(IsPrimeNumber(7));
    // console.log(IsPrimeNumber(-7));
    // console.log(IsPrimeNumber("7"));
    // console.log(IsPrimeNumber(undefined));
    // console.log(IsPrimeNumber(null));

    // 5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
    // MultiplyTable(2);
    // MultiplyTable(3);
    // MultiplyTable(4);
    // MultiplyTable(5);
    // MultiplyTable(6);
    // MultiplyTable(7);
    // MultiplyTable(8);
    // MultiplyTable(9);

    // 6. Написать функцию, которая реализует работу оператора %. 
    // Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. 
    // В функции использовать только + - * /, оператор % не использовать. 
    // console.log(RemainderOfTheDivision(274586, 10));
    // console.log(RemainderOfTheDivision(274586, 15));
    // console.log(RemainderOfTheDivision(274586, 98481652));
    // console.log(RemainderOfTheDivision(0, 0));
    // console.log(RemainderOfTheDivision(274586, 387));

    // 7. Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.
    // console.log(Summator (20));
    // console.log(Summator (20,20,20,20,20));

    // 8. Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
    // console.log(MaxNumber(20,30,40,10,0));
    // console.log(MaxNumber(-20,-30,-40,-10,-5));
    // 9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. 
    // Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
    // OddEvenNumbers(20,50,true);
    // OddEvenNumbers(20,50);

    // 10. Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг». 
    // Проверку на високосный год желательно написать отдельной функцией.

    // console.log(NextDayDate(20,05,2032));
    // console.log(NextDayDate(28,2,2028));

    // console.log(ConcatNumbers(1,2,3)); //DZ3
    // console.log(IsSuperNumber(6)); //DZ5
    // console.log(IsSuperNumber(28));
    // console.log(IsSuperNumber(496));

    console.log(TimeToScreen(12,23,35));
    console.log(TimeToScreen(12));
    console.log(TimeToScreen(25));
});

function LessNumber(number1,number2) {  //Task1
    return number1 > number2 ? number2 : number1;
}

function NumberPow(number, pow) { //Task2
    let answer = number;
    for(var i = 1; i < pow; i++)
    {
        answer *= number;
    }
    return answer;
}

function Calculate(number1, number2, sign) { //Task3
    if (sign === "/" && number2 == 0)
    {
        return "ZeroDivideException";
    }
    switch(sign)
    {
        case "+": return number1 + number2;
        case "-": return number1 - number2;
        case "/": return number1 / number2;
        case "*": return number1 * number2;
        default: return "Unknown operation";
    }
}

function IsPrimeNumber(number) { //Task4
    if (number < 2) return "InvalidRangeException";
    if (number === undefined) return "BadArgumentFunctionException";
    for (let i = 2; i < number; i++)
    {
        if(number % i == 0)
            return false;
    }
    return true;
}

function MultiplyTable (number) { //Task5
    for (let i = 1; i < 10; i++)
    {
        console.log(`${number} * ${i} = ` +  number * i);
    }
    console.log("");
}

function RemainderOfTheDivision (number, divider) {  //Task6
    if (divider == 0 || number == 0) return "badrequest";
    if (divider > number) return number + " bad";
    let remainder = Math.trunc(number / divider); 
    remainder = number - remainder*divider;
    return remainder;
}

function Summator() { //Task7
    if (arguments.length >= 1 && arguments.length <=5)
    {
        let sum = 0;
        for(let i = 0; i < arguments.length; i++ )
        {
            sum += arguments[i];
        }
        return sum;
    }
    return 0;    
}

function MaxNumber() { //Task8
    let max = 0;
    if (arguments.length >= 1 && arguments.length <= 5)
    {        
        max = arguments[0];
        for(let i = 0; i < arguments.length; i++ )
        {
            if(arguments[i] > max)
                max = arguments[i];
        }        
    }
    return max;   
}

function OddEvenNumbers(startRange, endRange, even = false) { //Task9
    for(let i = startRange; i <= endRange; i++)
    {
        if (even)
        {
            if (i % 2 == 0) 
                console.log(i);
        }
        else
        {
            if (i % 2 != 0) 
                console.log(i);
        }
    }
}

function NextDayDate(day,month,year) { //Task10
    let errorDate = false;
    let longMonth = [1,3,5,7,8,10,12];
    let shortMonth = [4,6,9,11];
    let leapYear = false;
    
    errorDate = year > 0 && year <= 9998 ? false : true;
    if (!errorDate)
    {        
        leapYear = IsLeapYear(year);
    }
    console.log(leapYear);
    errorDate = month > 0 && month <= 12 ? false : true;
    if (!errorDate) 
    {   
        errorDate = day > 0 && day <= 31 && longMonth.includes(month) ? false : true;
        errorDate = day > 0 && day <= 30 && shortMonth.includes(month) ? false : true;
        if (leapYear)
        {
            errorDate = day > 0 && day <= 29 && month == 2  ? false : true;
        }
        else
        {
            errorDate = day > 0 && day <= 28 && month == 2 ? false : true;
        }     
    }

    day = day + 1;

    if (day <= 31 && longMonth.includes(month) || 
        day <= 30 && shortMonth.includes(month) || 
        day <= 29 && month == 2 && leapYear ||  
        day <= 28 && month == 2)
        return day + "." + month + "." + year;
    else
    {
        day = 1;
        month = month + 1;
        if (month <= 12)
        {
            return day + "." + month + "." + year;
        }
        else
        {
            month = 1;
            year++;
            return day + "." + month + "." + year;
        }
    }
}

function IsLeapYear(year) { //Task10 InnerFunction
    let leapYear = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                leapYear = true;
            }                
        }
        else {
            leapYear = true;
        }            
    }
    return leapYear;
}


function ConcatNumbers (n1,n2,n3) //DZ 3
{
    return Number(n1 + "" + n2 + "" + n3);
}

function IsSuperNumber(number) {
    let divisionsMassive = [];
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisionsMassive.push(i);
        }
    }
    for (let i = 0; i < divisionsMassive.length; i++) {
        sum += divisionsMassive[i];
    }
    if (number == sum) {
        return true;
    }    
    return false;
}


function TimeToScreen(hour,minutes, seconds) {
    if (hour === undefined)
        return "Часы обязательны.";
    if(hour < 0 || hour > 24)
    {
        return "Часы должны быть в диапазоне от 0 до 24.";
    }
    minutes = minutes === undefined ? "00" : minutes;
    seconds = seconds === undefined ? "00" : seconds;
    return hour + ":" + minutes  + ":" + seconds;
}