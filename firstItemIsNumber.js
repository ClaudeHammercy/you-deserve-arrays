const prompt = require('prompt-sync')({sigint : true});

const array = JSON.parse(prompt('Enter some items in array format: '));

if (array[0] === Number(array[0])) {
    console.log(True);
}else {
    console.log(False);
}