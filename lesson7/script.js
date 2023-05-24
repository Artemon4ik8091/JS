window.addEventListener("DOMContentLoaded", (event) => {
    var massive = [];
    for(let i = 0; i < 10; i++) {
        massive.push(Math.trunc(1 + Math.random() * (10 + 1 - 1)));
    }
    var massive5 = [];
    for(let i = 0; i < 5; i++) {
        massive5.push(Math.trunc(1 + Math.random() * (10 + 1 - 1)));
    }

    PrintMassive(massive);  //task1.1
    console.log(MassiveAddAtIndex(massive,20,20));
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
function MassiveMax(massive) { //task1.5
    let max = massive[0];
    for( let i = 1; i < massive.length; i++)
    {
        if (max < massive[i])
            max = massive[i];
    }
    return max;
}
function MassiveAddAtIndex(massive, index, number) { //task1.6
    //massive[index] = number;
    if(index < massive.length) {
        massive[index] = number;
        //massive.splice(index,1,number);
    } else {
        massive[massive.length] = number;
    }
    return massive;
}
function MassiveDeleteAtIndex(massive, index) { //task1.7
    if(index < massive.length) {
        massive.splice(index,1);
    } else {
        massive.splice(massive.length-1,1);
    }
    return massive;
}