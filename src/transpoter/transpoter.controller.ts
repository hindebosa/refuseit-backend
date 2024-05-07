import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { TranspoterService } from './transpoter.service';
import { CreateTranspoterDto } from './dto/create-transpoter.dto';
import { IResponse } from 'src/common/interfaces/response.interface';
import { ResponseError, ResponseSuccess } from 'src/common/dto/response.dto';

@Controller('transporter')
export class TranspoterController {
  constructor(private readonly transpoterService: TranspoterService) {}

  @Post('createTransporter')
  @HttpCode(HttpStatus.OK)
  async createTranspoter(
    @Body() createTranspoterDto: CreateTranspoterDto,
  ): Promise<IResponse> {
    try {
      const transporter =
        await this.transpoterService.createTransporter(createTranspoterDto);
      return new ResponseSuccess(
        'SUCCESSFULLY ADDED A TRANSPORTER',
        transporter,
      );
    } catch (error) {
      return new ResponseError('COULD NOT CREATE A TRANSP0RTER', error);
    }
  }

  @Post('deleteTransporter')
  @HttpCode(HttpStatus.OK)
  async deleteTranspoter(@Body() transpoterId: number): Promise<IResponse> {
    try {
      const transporter =
        await this.transpoterService.deleteTransporter(transpoterId);
      return new ResponseSuccess(
        'SUCCESSFULLY ADDED A TRANSPORTER',
        transporter,
      );
    } catch (error) {
        return new ResponseError("COULD NOT DELETE TRANSPORTER",error)
    }
  }

  @Get('getTransporters')
  @HttpCode(HttpStatus.OK)
  async getTranspoters(): Promise<IResponse> {
    try{  const transpoters = await this.transpoterService.getAllTransporters();
        return await new ResponseSuccess(
          'SUCCESSFULLY GOT TRANSPORTER',
          transpoters,
        );}catch(error){
            return new ResponseError("COULD NOT GET TRANSPORTERS",error)
        }
  
  }
}
