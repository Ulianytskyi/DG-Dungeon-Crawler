const contentField = document.querySelector('.content');
const gameScreen = document.getElementById('game-screen');

import { screenWidth } from "./screen-size.js";
console.log('Screen Width:', screenWidth, 'px');

contentField.style.width = screenWidth + 'px';
// contentField.style.marginTop = 0 + 'px';
contentField.style.margin = 'auto';

// textures array --------------------------------------------

let texturesArr = [
  {sky: 'assets/sky.jpeg'}, 
  {wall: 'assets/wall.jpg'},
  {front: 'assets/view_.jpg'},
  {floor: 'assets/floor.jpg'},
];

const corridor = document.querySelector('.corridor');

const topBlock = document.getElementById('top-block');
const leftBlock = document.getElementById('left-block');
const frontBlock = document.getElementById('front-block');
const rightBlock = document.getElementById('right-block');
const downBlock = document.getElementById('down-block');

function makeView(target, path) {
  const img = document.createElement('img');
  img.src = `${path}`;
  target.append(img);
}

makeView(topBlock, texturesArr[0].sky);
makeView(leftBlock, texturesArr[1].wall);
makeView(frontBlock, texturesArr[2].front);
makeView(rightBlock, texturesArr[1].wall);
makeView(downBlock, texturesArr[3].floor);








// select disable -----------------------------------------

document.addEventListener('selectstart', function (e) {
    e.preventDefault(); 
  });



// temp ------------------------------------------------

const squareTemp = document.createElement('div');
squareTemp.classList.add('square-temp');
squareTemp.style.width = screenWidth + 'px';
squareTemp.style.height = screenWidth + 'px';
gameScreen.appendChild(squareTemp);