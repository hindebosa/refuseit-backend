import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { IResponse } from 'src/common/interfaces/response.interface';
import { ResponseSuccess } from 'src/common/dto/response.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService:ProductsService){
    }

    @Get('allproducts')
    @HttpCode(HttpStatus.OK)
    async getProducts():Promise<IResponse>{
       const result = await this.productService.getAllProducts()
        return new ResponseSuccess("LOGIN.SUCCESS", result);
    }

    @Post('createProducts')
    @HttpCode(HttpStatus.OK)
    async createProduct(@Body() createProductDto: CreateProductDto):Promise<IResponse>{
       this.productService.createProduct(createProductDto)  
        return new ResponseSuccess("SUCCESSFULLY ADDED A PRODUCT");
    } 
    
}
