import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService:ProductsService){
    }

    @Get('/allproducts')
    @HttpCode(HttpStatus.OK)
    async getProducts(){
        
    }
    
}
