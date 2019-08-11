const fs = require("fs");

const data = fs.readFileSync("text.txt", "utf8");

const stringArr = data.split(' ');

const repeats = [];


for (let i = 0; i < stringArr.length; i++) {
    let currentWord = stringArr[i];

    if (!isLetter(currentWord[currentWord.length - 1])) {
        while (!isLetter(currentWord[currentWord.length - 1])) {
            currentWord = currentWord.slice(0, -1);
        }
    }

    if (currentWord[0] === currentWord[currentWord.length - 1]) {
        repeats.push(`${currentWord[0]}`)
    }
}

const result = repeats.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
}, {});

console.log(result);

function isLetter(str) {
    return str.length === 1 && str.match(/[а-яА-Я]/i);
}
