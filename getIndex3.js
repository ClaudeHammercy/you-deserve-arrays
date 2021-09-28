const prompt = require('prompt-sync')({sigint : true});

const array = JSON.parse(prompt('Enter some items in array format: '));

console.log(array);
console.log(array.length);


if (array.length > 0) {
if (array.length >= 4) {
    const getIndex3 = array[3];
    console.log(array);
    console.log(getIndex3);
}
else if (array.length <= 3) {
    const getIndex3 = array[array.length - 1];
    console.log(array);
    console.log(getIndex3);
}
}