import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from "./DTO/register.user.dto";
import bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  //logic for user register
  
 async registerUser(registerUserDto:RegisterDto) {
    console.log('registerDTO',registerUserDto)
    const saltRounds = 10;
    const hashPassword=await bcrypt.hash(registerUserDto.password,saltRounds)

    /**
   * 1.check if email already exists
   * 2.hash the password
   * 3.store the user into db
   * 4.generate jwt token
   * 5.send token in response
   **/
    return this.userService.createUser({...registerUserDto,password:hashPassword});
  }
}
