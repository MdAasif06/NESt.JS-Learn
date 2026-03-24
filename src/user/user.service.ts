import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/DTO/register.user.dto';

@Injectable()
export class UserService {
    createUser(registerUserDto:RegisterDto){
        return {message:"user created"}
    }
}
