import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Josep' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'josep@gmail.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: 'Manresa' })
  @IsNotEmpty()
  @IsString()
  location: string;
}
