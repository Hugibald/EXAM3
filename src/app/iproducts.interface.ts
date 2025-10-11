export interface IProducts {
  // id for the details-page
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  availability: boolean;
  // To get the number of items in the cart
  quantity: number;
}
