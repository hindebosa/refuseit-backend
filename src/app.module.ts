import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { ProductsModule } from './products/products.module';
import { JWTService } from './auth/jwt.service';
import { ProductsService } from './products/products.service';
import { TranspoterModule } from './transpoter/transpoter.module';


@Module({
  imports: [AuthModule, UserModule,ConfigModule.forRoot({
    isGlobal: true, // no need to import into other modules
  }), ProductsModule, TranspoterModule,],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService,PrismaService,JWTService,ProductsService],
})
export class AppModule {}
