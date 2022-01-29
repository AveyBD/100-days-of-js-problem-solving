function isLeapYear(y) {
    if ((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) {
        console.log(y + ' is a Leap Year');
    } else {
        console.log( y + 'is Not a leap year');
    }
}

isLeapYear(2000);