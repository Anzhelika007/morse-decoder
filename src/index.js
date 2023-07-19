const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    let str = expr;
    let arr = [];
    const dot = /10/gi;
    const dash = /11/gi;
    const zero = /0/gi;
    let result = '';
    while (str.length > 0) {
        arr.push(str.slice(0, 10));
        str = str.slice(10,);
    }

    for (let item of arr) {
        letter = item.replace(dot, '.').replace(dash, '-').replace(zero, '');
        result += MORSE_TABLE[letter];
    }
    return result;

}

module.exports = {
    decode
}