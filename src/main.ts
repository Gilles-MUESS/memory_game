import './main.scss';

import Card from './types/card';

// Jeu de 16 cartes, 8 cartes de bases
const nbCards = 16;

for (let i = 0; i < nbCards / 2; i++) {
  const card = new Card('https://picsum.photos/100');
  document.body.appendChild(card.createCard());
  document.body.appendChild(card.createCard());
}
