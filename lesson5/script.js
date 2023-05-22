window.addEventListener("DOMContentLoaded", (event) => {
    //console.log(FactorialRecursive(5)); //Task1
    // OutputInRangeDesc(2,10);  //Task2
    // OutputInRangeAsc(2,10);  //Task2
    // console.log(ReverseOutput(2345)); //Task3
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