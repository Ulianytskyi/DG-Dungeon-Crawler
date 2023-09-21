const contentField = document.querySelector('.content');
const gameScreen = document.getElementById('game-screen');

import { screenWidth } from "./screen-size.js";
console.log('Screen Width:', screenWidth, 'px');

contentField.style.width = screenWidth + 'px';
// contentField.style.marginTop = 0 + 'px';
contentField.style.margin = 'auto';













// select disble -----------------------------------------

document.addEventListener('selectstart', function (e) {
    e.preventDefault(); // Відмінити подію виділення тексту
  });



// temp ------------------------------------------------

const squareTemp = document.createElement('div');
squareTemp.classList.add('square-temp');
squareTemp.style.width = screenWidth + 'px';
squareTemp.style.height = screenWidth + 'px';
gameScreen.appendChild(squareTemp);