const inputText = document.getElementsByClassName('input-text')[0];
const divContainer = document.getElementsByClassName('container')[0];
const paragraph = document.getElementsByClassName('output-text');

let outputText = paragraph[0];
let result = outputText.innerHTML;
result = '';

const PRINT_SYMBOL_REGEXP = /\b(\d|\s|\w){1}\b/;
const TITLE_H1_REGEXP = /^#\s.+$/;
const BOLD_REGEXP = /\*{2}.+\*{2}/;
const isTitle = (result) => TITLE_H1_REGEXP.test(result);
const isBold = (result) => BOLD_REGEXP.test(result);

function isPrintSymbol(symbol) {
  return PRINT_SYMBOL_REGEXP.test(symbol);
};

inputText.addEventListener('keydown', function (event) {
  let text = event.key;
  if (event.code == 'Enter') {
    event.preventDefault();
    let newParagraph = outputText.cloneNode();
    divContainer.append(newParagraph);
    outputText = paragraph[paragraph.length - 1];
    result = '';
    text = '';
  }

  if (event.code == 'Space') {
    text = ' ';
  }

  if (!isPrintSymbol(text)) text = '';

  outputText.innerHTML += text;
  
  console.log(result);
})

