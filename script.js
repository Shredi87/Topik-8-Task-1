const inputText = document.getElementsByClassName('input-text')[0];
const divContainer = document.getElementsByClassName('container')[0];
const paragraph = document.getElementsByClassName('output-text');
let outputText = paragraph[0];
let result = outputText.textContent;
result = '';

console.log(inputText);
console.log(divContainer);
console.log(paragraph);
console.log(outputText);

inputText.addEventListener('keydown', function (event) {
  let text = event.key;
  let code = event.code;
  if (code == 'Enter') {
    event.preventDefault();
    let newParagraph = outputText.cloneNode();
    divContainer.append(newParagraph);
    outputText = paragraph[paragraph.length - 1];
    result = '';
    text = '';
  }

  console.log(outputText.value);
  result += text;
  console.log(outputText.value);
})

function isTitle() {
  if (result[0] == '#') 
  result = `<h1>${this.result}</h1>`;
  return result;
}

function checkKey(params) {
  
}
