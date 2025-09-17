import { config } from './../node_modules/effect/src/internal/defaultServices';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';




@Module({
  imports: [
    //.env doyasını global olarak kullanabilmek için
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    PrismaModule,
    AuthModule,
    UserModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
