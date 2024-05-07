import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TranspoterService } from './transpoter.service';
import { CreateTranspoterDto } from './dto/create-transpoter.dto';
import { IResponse } from 'src/common/interfaces/response.interface';
import { ResponseSuccess } from 'src/common/dto/response.dto';

@Controller('transporter')
export class TranspoterController {
  constructor(private readonly transpoterService: TranspoterService) {}
 
  @Post('createTransporter')
  @HttpCode(HttpStatus.OK)
  async createTranspoter(
    @Body() createTranspoterDto: CreateTranspoterDto,
  ): Promise<IResponse> {
   const transporter= await this.transpoterService.createTransporter(createTranspoterDto)
    return new ResponseSuccess("SUCCESSFULLY ADDED A TRANSPORTER",transporter);
  }

  @Post('createTransporter')
  @HttpCode(HttpStatus.OK)
  async deleteTranspoter(
    @Body() transpoterId: number,
  ): Promise<IResponse> {
   const transporter= await this.transpoterService.deleteTransporter(transpoterId)
    return new ResponseSuccess("SUCCESSFULLY ADDED A TRANSPORTER",transporter);
  }

  @Get('getTransporters')
  @HttpCode(HttpStatus.OK)
  async getTranspoters(): Promise<IResponse> {
   const transpoters= await this.transpoterService.getAllTransporters()
    return await new ResponseSuccess("SUCCESSFULLY ADDED A TRANSPORTER", transpoters);
  }
}
