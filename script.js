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

generateRandomColors();
generateColors();