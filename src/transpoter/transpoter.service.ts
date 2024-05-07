import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTranspoterDto } from './dto/create-transpoter.dto';
import { create } from 'domain';

@Injectable()
export class TranspoterService {
  constructor(private readonly prisma: PrismaService) {}

  createTransporter = async (createTranspoterDto: CreateTranspoterDto) => {
    const transpoterToBeAdded= {...createTranspoterDto}
    const result = await this.prisma.transporter.create({
        data:{
            ...createTranspoterDto,
            yearOfManufacture:new Date(),
            userId:1
        }
    })
    return result
    console.log(result)
  };

  deleteTransporter = async (id:number) => {
    const result = await this.prisma.transporter.delete({where:{
        id
    }})
  };
 async  getAllTransporters (){
 const transporters=await this.prisma.transporter.findMany()
 console.log(transporters)
     return transporters
  }
}
