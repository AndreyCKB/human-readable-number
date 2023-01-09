const mapNumberToWord = {
    0 : 'zero',   11 : 'eleven',       40 : 'forty',
    1 : 'one',    12 : 'twelve',       50 : 'fifty',
    2 : 'two',    13 : 'thirteen',     60 : 'sixty',
    3 : 'three',  14 : 'fourteen',     70 : 'seventy',
    4 : 'four',   15 : 'fifteen',      80 : 'eighty',
    5 : 'five',   16 : 'sixteen',      90 : 'ninety',
    6 : 'six',    17 : 'seventeen',      
    7 : 'seven',  18 : 'eighteen',
    8 : 'eight',  19 : 'nineteen',
    9 : 'nine',   20 : 'twenty',
    10 : 'ten',   30 : 'thirty',
}

module.exports = function toReadable (number) {
    if (number < 100) return numberLessThanOneHundred(number);

    const firstDigit = Math.floor(number / 100);
    const otherDigitsWord = number % 100 > 0 ? ' ' + numberLessThanOneHundred(number - firstDigit * 100) : '';
    return `${mapNumberToWord[firstDigit]} hundred${otherDigitsWord}`    
}

function numberLessThanOneHundred(number){
    if (number < 21) return mapNumberToWord[number];

    const remainderDivision = number % 10;    
    return `${mapNumberToWord[number - remainderDivision]}${remainderDivision > 0 ? ' '+mapNumberToWord[ remainderDivision ] :''}`
}
