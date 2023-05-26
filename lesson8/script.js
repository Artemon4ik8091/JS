window.addEventListener("DOMContentLoaded", (event) => {
    // console.log(CompareStrings("123","12"));  //task1
    // console.log(CompareStrings("12","123"));
    // console.log(CompareStrings("123","123"));

    
});

function CompareStrings(string1,string2)  //task1
{
    if(string1.length > string2.length)
        return 1;
    if(string1.length < string2.length)
        return -1;
    if(string1.length == string2.length)
        return 0;
}