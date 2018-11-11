export interface IComponent {
    image: string;
    articleTitle: string;
    price: string;
}
export class BuildingComponent {
    constructor(public articleTitle: string, public price: string, public image: string) {}
  }