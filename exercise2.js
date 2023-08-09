// var year = parseInt(prompt('Enter a number:'));
var year = 1987;

if(year % 4 === 0 && year % 400 === 0){
    console.log(`The year ${year} is a leap year`);
}
else if (year % 100 === 0) {
    console.log(`The year ${year} is not a leap year`);
} else {
    console.log(`The year ${year} is not a leap year`);
}