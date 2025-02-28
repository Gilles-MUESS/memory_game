import './main.scss';

import Board from './types/board';
import Game from './types/game';

const boardEl: HTMLElement | null = document.getElementById('gameBoard');
const board = new Board();
const cards = board.getCards();
const game = new Game(cards);

Promise.all(cards.map((card) => card.ready()))
  .then(() => {
    cards.forEach((card) => {
      boardEl?.appendChild(card.createCard());
    });
  })
  .then(() => {
    const cardsEls = document.querySelectorAll('.card');
    cardsEls.forEach((cardEl) => {
      cardEl.addEventListener('click', game.boundPlayCard, true);
    });
  });
