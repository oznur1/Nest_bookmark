import { Controller, Body, Post, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, SignupDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

constructor(private readonly authService:AuthService){}



 @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signup(@Body() dto:SignupDTO) {
   return this.authService.signup(dto)
  }



  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dto:LoginDTO) {
    return this.authService.login(dto)
  }


  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout() {
    return this.authService.logout()
  }


  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refresh() {
    return this.authService.refresh()
  }
}
