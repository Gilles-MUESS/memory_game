import Card from './card';
// import Board from './board';

export default class Game {
  private remainingCards: Card[];
  private selectedCards: Array<Card | undefined> = [];
  public boundPlayCard: (e: Event) => void;

  constructor(remainingCards: Card[]) {
    this.remainingCards = remainingCards;
    this.boundPlayCard = this.playCard.bind(this);
  }

  public playCard(e: Event): void {
    const cardEl = e.currentTarget as HTMLElement;
    const cardId = cardEl.dataset.cardId as string;
    const card = this.remainingCards.find((c) => c.getCardId() === cardId);

    cardEl.removeEventListener('click', this.boundPlayCard, true);
    cardEl.classList.add('flipped');

    this.selectedCards.push(card);
    this.checkMatch();
  }

  public checkMatch(): void {
    if (this.selectedCards.length < 2) {
      return;
    }

    const [firstCard, secondCard] = this.selectedCards;
    if (firstCard?.getCardId() === secondCard?.getCardId()) {
      this.remainingCards = this.remainingCards.filter(
        (card) => card !== firstCard && card !== secondCard
      );
      this.selectedCards = [];
      if (this.remainingCards.length === 0) {
        setTimeout(() => alert('You win!'), 500);
      }
    } else {
      setTimeout(() => {
        this.selectedCards.forEach((card) => {
          const cardEl = document.querySelector(
            `.flipped[data-card-id="${card?.getCardId()}"]`
          );
          cardEl?.addEventListener('click', this.boundPlayCard, true);
          cardEl?.classList.remove('flipped');
        });
        this.selectedCards = [];
      }, 500);
    }
  }
}
