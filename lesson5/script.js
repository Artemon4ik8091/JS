window.addEventListener("DOMContentLoaded", (event) => {
    //console.log(FactorialRecursive(5)); //Task1
    // OutputInRangeDesc(2,10);  //Task2
    // OutputInRangeAsc(2,10);  //Task2
    // console.log(ReverseOutput(2345)); //Task3
    // console.log(SumNumber(1357)); //Task4
    // console.log(PairRoundBrackets(4));  //Task5
    // console.log(NumberPow(2,3)); //DZ1
    // console.log(MaxDivider(125,625)); //DZ2
});

function FactorialRecursive(number, result = 1) //Task1
{
    if (number == 0) 
    {
        return result;
    }
    result = number * FactorialRecursive(number-1, result);
    return result;  
}

function OutputInRangeDesc (min,max) //Task2
{
    if (min == max)
    {
        console.log(max);
        return;
    }
    console.log(max);
    OutputInRangeDesc(min, max-1);
}
function OutputInRangeAsc (min, max) //Task2
{
    if (min == max)
    {
        console.log(min);
        return;
    }
    console.log(min);
    OutputInRangeAsc(min+1, max);
}

function ReverseOutput(number)  //Task3
{
    number = number.toString();
    if(number.length > 0 )
    { 
        return Number(number.substring(number.length-1) + 
        ReverseOutput(number.substring(0,number.length-1)));
    }
    else
    {
        return "";
    }
}

function SumNumber(number)  // Task4
{
    if (number <= 0)
        return 0;
    return number % 10 + SumNumber(Math.trunc(number / 10));
}

function PairRoundBrackets(number)   // Task5
{
    if (number == 0)
        return "";
    return "(" + PairRoundBrackets(number -1) + ")";
}

function NumberPow(number, pow) //DZ1
{
    if(pow == 1)
        return number;
    return number * (NumberPow(number, pow-1)); 
}

function MaxDivider(number1, number2, start = 1, limit = 0, divider = 1) {  //DZ2
    if (number1 == 0 || number2 == 0) return 0;
    if (limit == 0) {
        if (number1 < number2) {
            limit = number1;
        } else {
            limit = number2;
        }
    }
    if (start > limit) return divider;
    if (number1 % start == 0 && number2 % start == 0) divider = start;    
    return MaxDivider(number1, number2, ++start,limit, divider);
}
