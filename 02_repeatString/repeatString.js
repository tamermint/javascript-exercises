const repeatString = function(str, num) {
    let newStr = "";
    if(num === 0) {
        return '';
    }
    else if(num < 0) {
        return 'ERROR';
    }
    else {
        for (let i = 0; i < num; i++) {
            newStr += str;
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
