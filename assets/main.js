var cylinder = {
    height: 10,
    radius: 2,
    calcVolume: function() {
        return 3.14 * cylinder.radius** 2 * cylinder.height;
    },
    calcArea: function() {
        return 2 * 3.14 * cylinder.radius * cylinder.height;
    }
};
console.log(cylinder.calcVolume());
console.log(cylinder.calcArea());

/*---------------------------------------------------*/

function getResult(numberA, numberB, sing) {
    var str = sing;
    switch(str.charAt(0)) {
        case '+': 
            var result = numberA + numberB;
            break;
        case '*':
            var result =  numberA * numberB;
            break;
    } 
    return result;
}
console.log(getResult(5, 6, '+'));

/*-------------------------------------------------*/
function isCharPresent(string, symbol) {
        for (var index = 0; index < string.length; index++) {
            if (string[index] === symbol) {
                return true;
            }
        }
        return false;
    }
console.log(isCharPresent('ivan', 'v'));

/*-----------------------------------------------*/

function charIndexOf(string, symbol) {
    for (var index = 0; index < string.length; index++) {
        if (string[index] === symbol) {
            return index;
        }
    }
    return -1;
} 
console.log(charIndexOf('ivan', 'n'));

