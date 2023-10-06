import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
//import { IsTrue } from './is-true.validator';

export class RegisterUserDto {
  @ApiProperty({ example: 'Carles' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'carles@estraperlo.free' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  @IsString()
  location: string;
}
