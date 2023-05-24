window.addEventListener("DOMContentLoaded", (event) => {
    var massive = [];
    for(let i = 0; i < 10; i++) {
        massive.push(Math.trunc(1 + Math.random() * (10 + 1 - 1)));
    }
    var massive5 = [];
    for(let i = 0; i < 5; i++) {
        massive5.push(Math.trunc(1 + Math.random() * (10 + 1 - 1)));
    }
    var fruits = ["apple","pineapple","orange","lemon","banana","kiwi"];
    // document.write("<ul>");
    // fruits.forEach(element => {
    //     document.write("<li>" + element + "</li>");
    // });
    //document.write("</ul>");
    let mystring = "<ul>";
    fruits.forEach(element => {
        mystring += "<li>" + element + "</li>";
        //document.write("<li>" + element + "</li>");
    });
    mystring += "</ul>";
    loger.innerHTML = mystring;
    //document.write("</ul>");
    // PrintMassive(massive);  //task1.1
    // PrintMassiveEven(massive); //task1.2
    // console.log(MassiveSum(massive)); //task1.3
    // console.log(MassiveMax(massive)); //task1.4
    // console.log(MassiveAddAtIndex(massive,20,20));  //task1.5
    // console.log(MassiveDeleteAtIndex(massive,3,20));  //task1.6

    // console.log(ConcatMassive(massive,massive5)); //task 2.1
    // console.log(ConcatIntersectMassive(massive,massive5)); //task 2.2
    // console.log(massive);
    // console.log(massive5);
    // console.log(ConcatOutsectMassive(massive,massive5)); //task 2.3
    console.log(FindFruit(fruits, "orange3"));
});

function PrintMassive(massive) { //task1.1
    for( let i = 0; i < massive.length; i++)
    {
        console.log(massive[i]);
    }
}
function PrintMassiveEven(massive) { //task1.2
    for( let i = 0; i < massive.length; i++)
    {
        if (massive[i] % 2 == 0)
            console.log(massive[i]);
    }
}
function MassiveSum(massive) { //task1.3
    let sum = 0;
    for( let i = 0; i < massive.length; i++)
    {
        sum += massive[i];
    }
    return sum;
}
function MassiveMax(massive) { //task1.4
    let max = massive[0];
    for( let i = 1; i < massive.length; i++)
    {
        if (max < massive[i])
            max = massive[i];
    }
    return max;
}
function MassiveAddAtIndex(massive, index, number) { //task1.5
    //massive[index] = number;
    if(index < massive.length) {
        massive[index] = number;
        //massive.splice(index,1,number);
    } else {
        massive[massive.length] = number;
    }
    return massive;
}
function MassiveDeleteAtIndex(massive, index) { //task1.6
    if(index < massive.length) {
        massive.splice(index,1);
    } else {
        massive.splice(massive.length-1,1);
    }
    return massive;
}

function ConcatMassive(massive1,massive2) //task 2.1
{
    let concatMassive = massive1.concat(massive2);
    concatMassive = concatMassive.filter((value, index, array) => array.indexOf(value) === index);;
    return concatMassive;
}

function ConcatIntersectMassive(massive1,massive2) //task 2.2
{
    let concatMassive = [];
    for(let i = 0; i < massive2.length; i++)
    {
        if (massive1.indexOf(massive2[i]) >= 0)
            concatMassive.push(massive2[i]);
    }
    concatMassive = concatMassive.filter((value, index, array) => array.indexOf(value) === index);
    return concatMassive;
}
function ConcatOutsectMassive(massive1,massive2) //task 2.3
{
    let concatMassive = [];
    for(let i = 0; i < massive1.length; i++)
    {
        if (massive2.indexOf(massive1[i]) < 0)
            concatMassive.push(massive1[i]);
    }
    return concatMassive;
}

function FindFruit(massive,fruit)
{
    let findIndex = -1;
    massive.forEach(function callback(currentValue, index) {
        if (currentValue.toLowerCase() == fruit.toLowerCase())
            findIndex = index;
    });
    return findIndex;
}