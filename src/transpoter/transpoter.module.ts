import { Module } from '@nestjs/common';
import { TranspoterController } from './transpoter.controller';
import { TranspoterService } from './transpoter.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TranspoterController],
  providers: [TranspoterService,PrismaService]
})
export class TranspoterModule {}
