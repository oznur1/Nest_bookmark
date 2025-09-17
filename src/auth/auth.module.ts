import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWTRefreshStrategy } from './strategy/jwt-refresh.stregy';
import { JWTAccessStrategy } from './strategy/jwt-access.strategy';

@Module({
  //Dışarıdan gelen modulleri import ediyoruz
  imports:[JwtModule.register({}),PassportModule.register({})],

  //Servislerimizi export ediyoruz
  providers: [AuthService,JWTRefreshStrategy,JWTAccessStrategy],

  //Controllerımızı export ediyoruz
  controllers: [AuthController]
})
export class AuthModule {}
