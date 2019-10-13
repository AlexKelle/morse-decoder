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

const getMorseCode = (letter) => {
  let code = letter.replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-');
 return code;
};

function decode(expr) {
  let result = '';
  for(let sliceIndex = 10; sliceIndex <= expr.length; sliceIndex += 10){
      const startIndex = sliceIndex - 10;
      const letter = expr.slice(startIndex, sliceIndex);
      if(letter === '**********'){
        result += ' ';
      } else {
        result += MORSE_TABLE[getMorseCode(letter)];
      };
  }
  return result;
}

module.exports = {
    decode
}