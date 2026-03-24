import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/DTO/register.user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(registerUserDto: RegisterDto) {
    try {
      return await this.userModel.create({
        fname: registerUserDto.fname,
        lname: registerUserDto.lname,
        email: registerUserDto.email,
        password: registerUserDto.password,
      });
    } catch (error) {
      console.log(error);
      const e = error as { code?: number };
      if (e.code === 11000) {
        throw new ConflictException('Email is already token');
      }
      throw new error();
    }
  }
}
