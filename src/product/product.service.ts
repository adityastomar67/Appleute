import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private readonly products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category 1',
      description: 'This is product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category 2',
      description: 'This is product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category 1',
      description: 'This is product 3',
      price: 300,
    },
  ];

  getProducts() {
    return this.products;
  }
}
