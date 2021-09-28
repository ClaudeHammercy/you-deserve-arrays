const prompt = require('prompt-sync')({sigint : true});

const array = JSON.parse(prompt('Enter some items in array format: '));

const isLongList = array.length >= 10;
console.log('Is it long?: ', isLongList);