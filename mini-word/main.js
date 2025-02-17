const colorInput = document.getElementById('color');
const sizeInput = document.getElementById('size');
const fontInput = document.getElementById('font-type');

colorInput.addEventListener('input', styleUpdate);
sizeInput.addEventListener('input', styleUpdate);
fontInput.addEventListener('change', styleUpdate);

function styleUpdate() {
  const color = colorInput.value;
  const size = sizeInput.value
  const font = fontInput.value;

  document.getElementById('text').style.color = color;
  document.getElementById('text').style.fontSize = size + 'px';
  document.getElementById('text').style.fontFamily = font;

}
