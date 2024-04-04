export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly amount: string;
    readonly price: string;
    readonly coordinates: {
      lat:string;
      lng:string;
    }
  }