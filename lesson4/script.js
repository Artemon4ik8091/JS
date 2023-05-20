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
    Summator (20);
    Summator (20,20,20,20,20);
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

function IsPrimeNumber(number) {
    if (number < 2) return "InvalidRangeException";
    if (number === undefined) return "BadArgumentFunctionException";
    for (let i = 2; i < number; i++)
    {
        if(number % i == 0)
            return false;
    }
    return true;
}

function MultiplyTable (number) {
    for (let i = 1; i < 10; i++)
    {
        console.log(`${number} * ${i} = ` +  number * i);
    }
    console.log("");
}

function RemainderOfTheDivision (number, divider) { 
    if (divider == 0 || number == 0) return "badrequest";
    if (divider > number) return number + " bad";
    let remainder = Math.trunc(number / divider); 
    remainder = number - remainder*divider;
    return remainder;
}

function Summator()
{

}