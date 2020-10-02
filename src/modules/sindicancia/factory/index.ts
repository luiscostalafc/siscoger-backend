import { Sindicancia } from '../entity/sindicancia.entity';

export class Factory {
  static create(): Sindicancia {
    const product = new Sindicancia();
    product.id = 1;
    product.title = 'Product Title';
    product.description = 'Product Description';
    product.price = 100;
    product.createdAt = new Date();

    return product;
  }
}