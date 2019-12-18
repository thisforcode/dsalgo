var intToRoman = function(num) {
    let res = convertNum(num);
    return res;
};

function convertNum(num){
    if(num < 1){return ""}
    if(num >= 1000){return 'M' + convertNum(num - 1000)}
    if(num >= 900){return 'CM' + convertNum(num - 900)}
    if(num >= 500){return 'D' + convertNum(num - 500)}
    if(num >= 400){return 'CD' + convertNum(num - 400)}
    if(num >= 100){ return 'C' + convertNum(num - 100)}
    if(num >= 90){return 'XC' + convertNum(num - 90)}
    if(num >= 50){return 'L' + convertNum(num - 50)}
    if(num >= 40){return 'XL' + convertNum(num - 40)}
    if(num >= 10){return 'X' + convertNum(num - 10)}
    if(num >= 9){return 'IX' + convertNum(num - 9)}
    if(num >= 5){return 'V' + convertNum(num - 5)}
    if(num >= 4){return "IV" + convertNum(num - 4)}
    if(num >= 1){return 'I' + convertNum(num - 1)}
}

console.log(intToRoman('1994'));
