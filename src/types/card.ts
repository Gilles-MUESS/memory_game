export default class Card {
  private imgId: string | null = null;
  private img: string | null = null;

  constructor(url: string) {
    this.fetchImgData(url).then((data) => {
      this.img = this.getImgUrl(data);
      this.imgId = this.getImgId(data);
    });
  }

  private async fetchImgData(url: string): Promise<Response> {
    return await fetch(url);
  }

  private getImgUrl(data: Response): string {
    return data.url;
  }

  private getImgId(data: Response): string | null {
    return data.headers.get('Picsum-ID');
  }

  public getCardId(): string | null {
    return this.imgId;
  }

  public getCardImg(): string | null {
    return this.img;
  }

  public createCard(): HTMLElement {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = this.imgId ?? '';
    const cardContent = document.createElement('img');
    cardContent.classList.add('card-content');
    cardContent.src = this.img ? `${this.img}` : '';
    card.appendChild(cardContent);
    return card;
  }
}
