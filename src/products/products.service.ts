import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        private readonly prisma: PrismaService) { }

    async createProduct(createProductDto: CreateProductDto) {
        const product = await this.prisma.product.create({
            data: {
                ...createProductDto,
            }
        })
        if (product) return product;

    }
    async getAllProducts() {
        return this.prisma.product.findMany()
    }


}
