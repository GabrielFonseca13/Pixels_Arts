function generateRandomColors() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  return `rgb(${red},${green},${blue})`;
}
function generateColors() {
  const colors = document.querySelectorAll('.color');
  colors[1].style.backgroundColor = generateRandomColors();
  colors[2].style.backgroundColor = generateRandomColors();
  colors[3].style.backgroundColor = generateRandomColors();
}
function addPixels(size) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
  for (let row = 0; row < size; row += 1) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    for (let column = 0; column < size; column += 1) {
      const pixelElement = document.createElement('div');
      pixelElement.classList.add('pixel');
      rowElement.appendChild(pixelElement);
    }
    pixelBoard.appendChild(rowElement);
  }
}
function clickColorSelector() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', (event) => {
    const color = event.target;
    if (color.classList.contains('color')) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      color.classList.add('selected');
    }
  });
}
function clickPixelPaint() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const pixel = event.target;
    if (pixel.classList.contains('pixel')) {
      const selectedColor = document.querySelector('.selected');
      pixel.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  });
}

generateRandomColors();
generateColors();
addPixels(5);
clickColorSelector();
clickPixelPaint();
