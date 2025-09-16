import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDTO, SignupDTO } from './dto/auth.dto';
import *as argon from "argon2";
@Injectable()
export class AuthService {
   

    async signup(dto:SignupDTO){

    try{
      //Şifre hashle
    const hashedPasword=await argon.hash(dto.password);

    // Kullanıcı veritabına kaydet
    
    
    return{message:"Kullanıcı hesabı oluşturuldu"}
    
    
    }catch(error){
    throw new BadRequestException(error.message);
    }
        
    }



    async login(dto:LoginDTO){
        return{message:"Kullanıcı girişi başarılı"}
    }



    async logout(){
        return{message:"Kullanıcı çıkışı başarılı"}
    }



    async refresh(){
        return{message:"Token yenilendi"}
    }
}
