import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsNumber()
  id: number;

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
