import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/interfaces/user.interface';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { signupEmailTemplate } from 'src/mail/templates/register';

const saltRounds = 10;

@Injectable()
export class AuthService {
 
  constructor(
     private readonly prisma: PrismaService, private mailerService: MailerService) {}

  async createNewUser(newUser: CreateUserDto): Promise<User> { 
    if(this.isValidEmail(newUser.email) && newUser.hash){
      var userRegistered = await this.findByEmail(newUser.email);
      if(!userRegistered){
        console.log(newUser)
        newUser.hash = await bcrypt.hash(newUser.hash, saltRounds);
        const user = await this.prisma.user
            .create({
              data: {
               ...newUser
              },
            })

        return await user
      } else if (!userRegistered.validEmail) {
        return userRegistered;
      } else {
        throw new HttpException('REGISTRATION.USER_ALREADY_REGISTERED', HttpStatus.FORBIDDEN);
      }
    } else {
      throw new HttpException('REGISTRATION.MISSING_MANDATORY_PARAMETERS', HttpStatus.FORBIDDEN);
    } 
    
  }

  async createEmailToken(email: string): Promise<boolean> {
    var emailVerification = await this.prisma.emailVerification.findUnique({where:{email: email}}); 
    if (emailVerification && ( (new Date().getTime() - emailVerification.timestamp.getTime()) / 60000 < 15 )){
      throw new HttpException('LOGIN.EMAIL_SENT_RECENTLY', HttpStatus.INTERNAL_SERVER_ERROR);
    } else {
     const emailVerificationModel = await this.prisma.emailVerification.findUnique(
        { where: { email } }

      );
      console.log(emailVerificationModel,"asdasdasdas" )
      if (emailVerificationModel===null) {
        console.log("in here")
       const resulk= await this.prisma.emailVerification.create({
          data: {
            email: email,
            emailToken: (Math.floor(Math.random() * (9000000)) + 1000000).toString(),
            timestamp: new Date()
          }
        });
      }
      return true;
    }
  }
  async sendEmailVerification(email: string): Promise<boolean> {
    var model = await this.prisma.emailVerification.findUnique({ where: { email } });
    console.log(model)

    if (model && model.emailToken) {
    const sent =   await this.mailerService.sendMail({
        to: email,
        from: 'RefuseIt', 
        subject: 'Welcome to Nice App! Confirm your Email',
        html: signupEmailTemplate(model.email,"heydhhd","asnasdnnasd")  // html body
      });
      return sent;
    } else {
      throw new HttpException('REGISTER.USER_NOT_REGISTERED', HttpStatus.FORBIDDEN);
    }
  }

  // async verifyEmail(token: string): Promise<boolean> {
  //   var emailVerif = await this.prisma.emailVerification.findUnique({ emailToken: token});
  //   if(emailVerif && emailVerif.email){
  //     var userFromDb = await this.prisma.user.findUnique({ email: emailVerif.email});
  //     if (userFromDb) {
  //       userFromDb.validEmail = true;
  //       var savedUser = await userFromDb.save();


  //       await emailVerif.remove();
  //       return !!savedUser;
  //     }
  //   } else {
  //     throw new HttpException('LOGIN.EMAIL_CODE_NOT_VALID', HttpStatus.FORBIDDEN);
  //   }
  // }

  isValidEmail (email : string){
    if(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    } else return false
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({where :{email: email}})
  }

}