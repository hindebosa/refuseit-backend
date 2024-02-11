import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { JWTService } from './jwt.service';

@Module({ imports :[MailerModule.forRootAsync({
    useFactory: async (config: ConfigService) => ({
      transport: {
        host: config.get('MAIL_HOST'),
        secure: false,
        auth: {
          user: config.get('SMTP_USERNAME'),
          pass: config.get('SMTP_PASSWORD'),
        },
      },
      defaults: {
        from: `"Nice App" <${config.get('SMTP_USERNAME')}>`,
      },
      template: {
        dir: join(__dirname, 'templates'),
        // adapter: new EjsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
    inject: [ConfigService],
  }),], 
    controllers: [AuthController],
    providers: [AuthService,PrismaService,ConfigService,JWTService]})
export class AuthModule {}
