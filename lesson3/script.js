window.addEventListener("DOMContentLoaded", (event) => {
   
    // //task1
    // var count = 10;
    // const symbol = "#";
    // while (count > 0)
    // {
    //     loger.innerHTML += symbol;
    //     count--;
    // }
    // //task2
    // var count2 = 10;
    // while (count2 > 0)
    // {
    //     loger.innerHTML += "<p>" + count2 + "</p>";
    //     count2--;
    // }

    // //task3
    // var number = 10;
    // var pow = 5;
    // while (pow > 0)
    // {
    //     number *= 10;
    //     pow--;
    // }
    // console.log(number);
    
    //  //task3
    //  var number = 10;
    //  var pow = 5;
    //  while (pow > 0)
    //  {
    //      number *= 10;
    //      pow--;
    //  }
    //  console.log(number);

    //task4
    // var startDivider = 1;
    // var number1 = 130;
    // var number2 = 65;
    // var massive = []; 
    // while (startDivider <= Math.min(number1,number2))
    // {
    //     if (number1 % startDivider == 0 && number2 % startDivider == 0)
    //         massive.push(startDivider);
    //     startDivider++;
    // }    
    // console.log(massive);

    // //task5
    // var startDivider = 1;
    // var number1 = 13;
    // var factorial = 1;

    // while (startDivider <= number1)
    // {
    //     factorial *= startDivider;
    //     startDivider++;
    // }   
    // console.log(factorial);

    //task6
    // do
    // {
    //     alert("Решите пример 2+2*2");
    //     var answer = prompt();
    // }
    // while(answer != 6)

    // //task7
    // var start = 1000;
    // var limiter = 50;
    // var divider = 2;
    // var countDivide = 0;
    // do
    // {
    //     start = start / divider;
    //     countDivide++;
    //     console.log("Деление номер " + countDivide);
    //     console.log("Полученное значение " + start);
    // }
    // while (start >= limiter)

    // //task8
    // var number = 63;
    // for (var i = 1; i <= 100;i++)
    // {
    //     if (number % i == 0)
    //         console.log(i);
    // }

    // //task9
    // var number1 = 20;
    // var number2 = 93;
    // for (var i = number1+4; i <= number2;i+=4)
    // {
    //     console.log(i);
    // }

    // //task10
    // var number1 = prompt();
    // var prime = true;
    // for (var i = 2; i <= number1/2;i++)
    // {        
    //     if (number1 % i == 0)
    //     {
    //         prime = false;
    //         break;
    //     }            
    // }
    // console.log(prime);

    // //dz7
    // var number = prompt("Введите число");
    // var left = prompt("Введите число сдвига");
    // var massive = [];
    // if (left > number.length)
    //     left = left%number.length;    
    // for (var i = left; i < number.length; i++)
    // {
    //     massive.push(number[i]);
    // }
    // for (var i = 0; i < left; i++)
    // {
    //     massive.push(number[i]);
    // }
    // console.log(massive);

    //dz8
    // var day = 0;
    // var next = true;
    // var text = "";
    // do 
    // {
    //     ++day;
    //     switch(day)
    //     {
    //         case 1: 
    //             text = "This is понедельник. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 2: 
    //             text = "This is понедельник 2. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 3: 
    //             text = "This is понедельник 3. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 4: 
    //             text = "This is понедельник 4. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 5: 
    //             text = "This is понедельник 5. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 6: 
    //             text = "This is понедельник 6. Дальше?";  
    //             next = confirm(text);
    //             break;
    //         case 7: 
    //             text = "This is понедельник 7. Дальше?";  
    //             next = confirm(text);
    //             if (next) day = 0;
    //             break;           
    //     }
    // }
    // while(next)

    //dz10

    alert("Загадай число from 0 to 100");
    var answer = false;
    var bottom = 0;
    var top = 100;
    while (!answer)
    {
        if (confirm("Число больше "+ Math.trunc((top+bottom)/2) +"?"))
        {
            bottom = Math.trunc(top+bottom)/2+1;
        }
        else if (confirm("Число меньше "+ Math.trunc((top+bottom)/2) +"?"))
        {
            top = Math.trunc((top+bottom)/2);
        }
        else 
        {
            alert("Ваше число "+Math.trunc((top+bottom)/2));
            answer = true;
        }
    }
});
