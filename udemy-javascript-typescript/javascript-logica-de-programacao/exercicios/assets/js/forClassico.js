function main() {
  const elementos = [
  {tag: 'h1', texto: 'Elemento h1'},
  {tag: 'h2', texto: 'Elemento h2'},
  {tag: 'h3', texto: 'Elemento h3'},
  {tag: 'h4', texto: 'Elemento h4'},
  ]

  const mainContainer = document.querySelector('.container');

  for(let i = 0; i < elementos.length; i++) {
    const newElement = createElementAndText(elementos[i]);
    mainContainer.append(newElement);
  }
}

function createElementAndText(elementData) {
  const element = document.createElement(elementData.tag);
  const content = document.createTextNode(elementData.texto);
  
  element.appendChild(content);
  
  return element
}

main();

// Eu não quis usar innerHTML nem innerText nesse exercício então procurei formas diferentes de fazer
// Optei então pelo document.createTextNode()