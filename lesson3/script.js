window.addEventListener("DOMContentLoaded", (event) => {
   
    //task1
    var count = 10;
    const symbol = "#";
    while (count > 0)
    {
        loger.innerHTML += symbol;
        count--;
    }
    //task2
    var count2 = 10;
    while (count2 > 0)
    {
        loger.innerHTML += "<p>" + count2 + "</p>";
        count2--;
    }
    
});
