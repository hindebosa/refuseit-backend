import { Controller, Get,Post,HttpStatus, HttpCode, Body, Param, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { IResponse } from 'src/common/interfaces/response.interface';
import { UserDto } from 'src/user/dto/user.dto';
import { ResponseError, ResponseSuccess } from 'src/common/dto/response.dto';
import { Login } from './interfaces/login.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    
    
    @Post('email/login')
    @HttpCode(HttpStatus.OK)
    public async login(@Body() login: Login): Promise<IResponse> {
      try {
        var response = await this.authService.validateLogin(login.email, login.hash);
        return new ResponseSuccess("LOGIN.SUCCESS", response);
      } catch(error) {
        return new ResponseError("LOGIN.ERROR", error);
      }
    }

    

    @Post('email/register')
    @HttpCode(HttpStatus.OK)
    async register(@Body() createUserDto: CreateUserDto): Promise<IResponse> {
      try {
        
        var newUser = new UserDto(await this.authService.createNewUser(createUserDto));
        const answer= await this.authService.createEmailToken(newUser.email);
        console.log("this is answer",answer)
        // //await this.authService.saveUserConsent(newUser.email); //[GDPR user content]
         var sent = await this.authService.sendEmailVerification(newUser.email);
         console.log("sent====>",sent)
        if(sent){
          return new ResponseSuccess("REGISTRATION.USER_REGISTERED_SUCCESSFULLY");
        } else {
          return new ResponseError("REGISTRATION.ERROR.MAIL_NOT_SENT");
        }
      } catch(error){

        return new ResponseError("REGISTRATION.ERROR.GENERIC_ERROR", error);
      }
     
      return null;
    }

    @Get('email/verify/:token')
    public async verifyEmail(@Param() params): Promise<IResponse> {
      try {
        var isEmailVerified = await this.authService.verifyEmail(params.token);
        return new ResponseSuccess("LOGIN.EMAIL_VERIFIED", isEmailVerified);
      } catch(error) {
        return new ResponseError("LOGIN.ERROR", error);
      }
    }

    @Get('email/resend-verification/:email')
    public async sendEmailVerification(@Param() params): Promise<IResponse> {
      try {
        await this.authService.createEmailToken(params.email);
        var isEmailSent = await this.authService.sendEmailVerification(params.email);
        if(isEmailSent){
          return new ResponseSuccess("LOGIN.EMAIL_RESENT", null);
        } else {
          return new ResponseError("REGISTRATION.ERROR.MAIL_NOT_SENT");
        }
      } catch(error) {
        return new ResponseError("LOGIN.ERROR.SEND_EMAIL", error);
      }
    }

    // @Get('email/forgot-password/:email')
    // public async sendEmailForgotPassword(@Param() params): Promise<IResponse> {
    //   try {
    //     var isEmailSent = await this.authService.sendEmailForgotPassword(params.email);
    //     if(isEmailSent){
    //       return new ResponseSuccess("LOGIN.EMAIL_RESENT", null);
    //     } else {
    //       return new ResponseError("REGISTRATION.ERROR.MAIL_NOT_SENT");
    //     }
    //   } catch(error) {
    //     return new ResponseError("LOGIN.ERROR.SEND_EMAIL", error);
    //   }
    // }

}
