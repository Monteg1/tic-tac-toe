'use strict';

const instruction = document.querySelector('ul');
const howPlay = document.querySelector('.style-btn');
const closeWindow = document.querySelector('#close');
const playZone = document.querySelectorAll('.play-zone');
const clear = document.querySelector('#clear');
const crosses = document.querySelector('.crosses');
const zero = document.querySelector('.zero');
let winX = document.querySelector('.win-x');
let winO = document.querySelector('.win-o');
let remove = document.querySelector('.remove');

howPlay.addEventListener('click', toggleModal);

closeWindow.addEventListener('click', toggleModal);

function toggleModal() {
    instruction.classList.toggle("is-open");
  }


  for (let play of playZone) {
    play.addEventListener('click', 
    (event) => event.target.innerText = 'Х');
    play.addEventListener('contextmenu', function(event) { 
    event.target.innerText = 'O';
    event.preventDefault();
    });

    clear.addEventListener('click', () => play.innerText = '');

    }

    clear.addEventListener('click', function() {
      playZone.innerText = '';
    });


    // for (let play of playZone) {
    //   play.addEventListener('mousedown', function(event) {
    //     if (event.which == 1) {
    //       event.target.innerText = 'Х';
    //     } else if (event.which == 3) {
    //       event.target.innerText = 'O';
          
    //     }
    //   });
    
    // }

crosses.addEventListener('click', function() {
let numX =  +winX.textContent + 1;
winX.innerText = numX;
if (numX == 5) {
  alert('"Крестики" победили! Поздравляем!');
}
});

zero.addEventListener('click', function() {
  let numO =  +winO.textContent + 1;
  winO.innerText = numO;
  if (numO == 5) {
    alert('"Нолики" победили! Поздравляем!');
  }
  });

  remove.addEventListener('click', function() {
    winX.innerText = 0;
    winO.innerText = 0;
  });