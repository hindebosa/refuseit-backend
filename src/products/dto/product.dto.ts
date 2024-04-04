export class ProductDto {
    constructor(object: any) {
      this.name = object.name;
      this.description = object.description;
      this.amount = object.amount;
      this.price= object.price;
      this.coordinates= object.coordinates
    };
    readonly name: string;
    readonly description: string;
    readonly amount: string;
    readonly price: string;
    readonly coordinates: {
      lat:string;
      lng:string;
    }
  }