const prompt = require('prompt-sync')({sigint : true});

const array = JSON.parse(prompt('Enter some items in array format: '));

const thirdItem = array[2];
const secondOfThird = thirdItem[1];
const type = isNaN(thirdItem[1]);

if (typeof thirdItem === 'string') {
    console.log('The second character of the third string is ', secondOfThird, '.');
}
else {
    console.log('Error');
}
