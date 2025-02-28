import Card from './card';

export default class Board {
  public nbCards: number;
  private cards: Card[] = [];
  private baseUrl: string;

  constructor(
    nbCards: number = 16,
    baseUrl: string = 'https://picsum.photos/100/166'
  ) {
    this.nbCards = nbCards;
    this.baseUrl = baseUrl;
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
    if (this.cards.length > 0) {
      return this.cards;
    }

    for (let i = 0; i < this.nbCards / 2; i++) {
      this.cards.push(new Card(this.baseUrl));
    }

    this.cards.push(...this.cards);
    this.shuffle(this.cards);

    return this.cards;
  }
}
