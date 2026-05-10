import randomizeColor from './utils/randomizeColor.js';

const canvas = document.querySelector('.canvas');
const changeSizeInput = document.querySelector('.size__input');
const changeSizeButton = document.querySelector('.size__button');
const canvasResetButton = document.querySelector('.reset__button');

const gridParams = {
  width: 16,
  height: 16,
};

const gridSize = gridParams.height * gridParams.width;

const canvasReset = (gridSize) => {
  canvas.innerHTML = '';
  resizeGrid(gridParams.width, gridParams.height);

  createCanvas(gridSize);
};

const resizeGrid = (width, height) => {
  canvas.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${height}, 1fr)`;
};

const changeDensityOfGrid = (value) => {
  canvas.innerHTML = '';
  const width = Math.max(2, Math.min(100, value));
  const height = width;
  resizeGrid(width, height);

  createCanvas(width * height);
};

const createCanvas = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid__element', `element${i}`);

    canvas.appendChild(gridElement);
  }
};

canvas.addEventListener('mouseover', (event) => {
  const element = event.target;

  if (element.classList.contains('grid__element')) {
    !element.style.background ? (element.style.background = randomizeColor()) : element.style.background;
    element.style.opacity < 1 ? (element.style.opacity = +element.style.opacity + 0.1) : element.style.opacity;
  }
});

changeSizeButton.addEventListener('click', () => {
  changeDensityOfGrid(Number(changeSizeInput.value));
});

canvasResetButton.addEventListener('click', () => {
  canvasReset(gridSize);
});

createCanvas(gridSize);
