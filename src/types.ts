export type User = {
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  starRating?: number;
};
