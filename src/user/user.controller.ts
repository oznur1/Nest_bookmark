import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Controller,Get,Patch, UseGuards,Req } from '@nestjs/common';
import { User } from 'src/auth/decorator/user.decorator';
import type {User as UserType} from "@prisma/client"




@Controller('user')
export class UserController {
constructor(private readonly userService:UserService){}

@UseGuards(AuthGuard("jwt-access"))
@Get ("profile")
getProfile(@User() user:UserType){
    return user 
}


@UseGuards(AuthGuard("jwt-access"))
@Patch("uptade")
updateUser(@User() user:UserType){
    console.log("güncellenecek kullanıcı" , user)
}



}
