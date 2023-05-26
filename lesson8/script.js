window.addEventListener("DOMContentLoaded", (event) => {
    // console.log(CompareStrings("123","12"));  //task1
    // console.log(CompareStrings("12","123"));
    // console.log(CompareStrings("123","123"));

    // console.log(StringCapitalize("apple")); //task2

    // console.log(VowelsCount("fruit")); //task3

    // console.log(SpamExist("100% бесплатно увеличение продаж")); //task4
    // console.log(SpamExist("это не спам"));

    // console.log(ShortString("возможно в этой строке находится более 20 символов")); //task4
    // console.log(ShortString("тут нет 20 символов"));

    // console.log(StringIsPalindrom("abcba"));  //task6
    // console.log(StringIsPalindrom("abcggcba"));
    // console.log(StringIsPalindrom("gfljskljgol"));

    // console.log(WordsCount("Должно быть 4 слова")); //task7

    // console.log(MaxWordLength("Должно быть 4 слова23423423423")); //task8
    // console.log(AverageWordsLength("Должно быть 4 слова 23423423423")); //task9

    // SymbolStats("jldkasghewjehj owghpouwgh piwgh[iw ehpqew ghip",'o');
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
function StringCapitalize(string) {  //task2
    return string[0].toUpperCase() + string.substring(1);
}
function VowelsCount(string) {  //task3
    massiveVowels = ['a','e','i','o','u','y'];
    let count = 0;
    for(let i = 0; i < string.length; i++)
    {
        if (massiveVowels.includes(string[i]))
            count++;
    }
    return count;
}
function SpamExist(string) {  //task4
    massiveSpamText = ["100% бесплатно", "увеличение продаж",
    "только сегодня","не удаляйте","xxx"];
    for(let i = 0; i < massiveSpamText.length; i++)
    {
        if (string.includes(massiveSpamText[i]))
            return true;
    }
    return false;
}
function ShortString(string) {  //task5
    if (string.length > 30)
        return string.substring(0,30) + "...";
    
    return string;
}
function StringIsPalindrom(string) {  //task6
    let min = 0;
    let max = string.length-1;
    while (max > min)
    {
        console.log(min + " " + max);
        if(string[min] === string[max]) {
            min++;
            max--;
        }
        else
        {
            return false;
        }
    }
    return true;
}
function WordsCount(string) {  //task7
    return string.split(" ").length;
}
function MaxWordLength(string){ //task8
    words = string.split(" ");
    return words.sort(CompareStrings)[words.length - 1];
}
function AverageWordsLength(string){ //task9
    let sum = 0;
    words = string.split(" ");
    words.forEach(s => sum += s.length);
    return sum/words.length;
}
function SymbolStats(string, char){ //task10
    let indexes = [];
    let count = 0;
    [...string].forEach(function (s, index) {
        if (s === char) { 
            count++; 
            indexes.push(index);
        }
    });
    console.log("Количество символов:" + count);
    console.log("Индексы символа в строке:");
    indexes.forEach(i => console.log(i));
}