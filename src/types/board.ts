import Card from './card';

export default class Board {
  private bordElement: HTMLElement | null = null;
  public nbCards: number;
  private baseUrl: string;
  private cards: Card[] = [];

  constructor(
    bordElement: HTMLElement | null,
    baseUrl: string,
    nbCards: number = 16
  ) {
    this.bordElement = bordElement;
    this.baseUrl = baseUrl;
    this.nbCards = nbCards;
  }

  public shuffle(array: Array<any>): void {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  public getCards(): Card[] {
    for (let i = 0; i < this.nbCards / 2; i++) {
      this.cards.push(new Card('https://picsum.photos/100'));
    }

    this.cards.push(...this.cards);
    this.shuffle(this.cards);

    return this.cards;
  }
}
