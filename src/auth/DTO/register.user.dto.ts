import {IsString,IsEmail,IsNotEmpty} from "class-validator"

export class RegisterDto {
  @IsString()
  fname: string;

  @IsString()
  lname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
