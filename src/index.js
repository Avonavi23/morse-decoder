const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(value) {
    const arrValue = value.split('');
    const arrCodedChars = [];
    let str = '';
    
    for (let i = 1; i <= arrValue.length; i++) {
        str += arrValue[i - 1];
        if (i % 10 === 0) {
            arrCodedChars.push(str);
            str = '';
        }
    }
    
    const normalizeArrCodedChars = arrCodedChars.map((arrCodedChar) => String(parseInt(arrCodedChar)));
    const arrMorseChars = normalizeArrCodedChars.map((normalizeArrCodedChar) => {
        const tenRegExp = /10/gi;
        const elevenRegExp = /11/gi;

        if (normalizeArrCodedChar === 'NaN') {
            return ' ';
        }
        return normalizeArrCodedChar.replace(tenRegExp, '.').replace(elevenRegExp, '-');
    });
    
    const result = arrMorseChars.map((arrMorseChar) => arrMorseChar === ' ' ? ' ' : MORSE_TABLE[arrMorseChar]).join('');
    return result;
}
    
module.exports = {
    decode
}