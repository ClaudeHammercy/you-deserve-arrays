const prompt = require('prompt-sync')({sigint : true});

const first = prompt('Enter an item: ');
const second = prompt('Enter another item: ');
const third = prompt('Enter another item: ');

const array = [first, second, third]
console.log(array);

const firstItem = array[0];
console.log(firstItem);
