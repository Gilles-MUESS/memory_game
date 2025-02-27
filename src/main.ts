import './main.scss';

import Board from './types/board';

const boardEl: HTMLElement | null = document.getElementById('gameBoard');
const board = new Board(boardEl, 'https://picsum.photos/100');
const cards = board.getCards();

Promise.all(cards.map((card) => card.ready())).then(() => {
  cards.forEach((card) => {
    boardEl?.appendChild(card.createCard());
  });
});
