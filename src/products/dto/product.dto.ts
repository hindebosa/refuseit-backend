export class ProductDto {
    constructor(object: any) {
      this.name = object.name;
      this.description = object.surname;
      this.amount = object.amount;
      this.price= object.price;
    };
    readonly name: string;
    readonly description: string;
    readonly amount: string;
    readonly price: string;
  }