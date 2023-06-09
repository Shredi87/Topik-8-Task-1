const inputText = document.getElementsByClassName('input-text')[0];
const divContainer = document.getElementsByClassName('container')[0];
const paragraph = document.getElementsByClassName('output-text');

let outputText = paragraph[0];
outputText.innerHTML = '';

const PRINT_SYMBOL_REGEXP = /\b(\d|\s|\w){1}\b/;
const TITLE_H1_REGEXP = /^# .+/;
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
    if (isTitle(outputText.innerHTML)) {
      let titleText = outputText.innerHTML;
      outputText.innerHTML = `<h1>${titleText.slice(2)}</h1>`
    }
    inputText.value = '';
    let newParagraph = outputText.cloneNode();
    divContainer.append(newParagraph);
    outputText = paragraph[paragraph.length - 1];
    result = '';
    text = '';
  }
 
  if (event.code == 'Space') outputText.innerHTML += ' ';
  if (event.key == '#') outputText.innerHTML += '#';
  if (event.key == '*') outputText.innerHTML += '*';

  if (!isPrintSymbol(text)) text = '';

  outputText.innerHTML += text;
  
  if (isBold(outputText.innerHTML)) {
    let index = outputText.innerHTML.search(BOLD_REGEXP);
    let normalText = outputText.innerHTML.slice(0, index);
    let boldText = outputText.innerHTML.slice(index);
    console.log(boldText);
    outputText.innerHTML = `${normalText}<b>${boldText.slice(2, boldText.length - 2)}</b>`
  }
})

