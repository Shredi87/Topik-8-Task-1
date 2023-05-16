const inputText = document.getElementsByClassName('input-text')[0];
const divContainer = document.getElementsByClassName('container')[0];
const paragraph = document.getElementsByClassName('output-text');

const PRINT_SYMBOL_REGEXP = /\d|\s|\w/u;
const TITLE_H1_REGEXP = /^#.+$/;
const BOLD_REGEXP = /\*{2}.+\*{2}/;

let outputText = paragraph[0];
let result = outputText.innerHTML;
outputText.value = '';

function isPrintSymbol(symbol) {
  return PRINT_SYMBOL_REGEXP.test(symbol);
};

inputText.addEventListener('keydown', function (event) {
  let text = event.key;
  if (event.code == 'Enter') {
    event.preventDefault();
    // result = result
    let newParagraph = outputText.cloneNode();
    divContainer.append(newParagraph);
    outputText = paragraph[paragraph.length - 1];
    outputText.value = '';
    text = '';
  }

  if (!isPrintSymbol(text)) text = '';

  result += text;

})
