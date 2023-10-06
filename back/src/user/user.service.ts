import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findOneLogin(email: string) {
    try {
      console.log(email);
      const result = await this.userRepository.find({
        where: { email: email },
      });
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.findOneLogin(createUserDto.email);
    if (findUser.length === 1) {
      throw new HttpException('USER_ALREADY_EXIST', 403);
    } else {
      const createdUser = await this.userRepository.save(createUserDto);
      console.log(createdUser);
      return {
        message: 'Created User success.',
        status: HttpStatus.OK,
        data: createdUser,
      };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const toUpdate = await this.userRepository.findOne({ where: { id } });
    const updated = Object.assign(toUpdate, updateUserDto);
    return await this.userRepository.save(updated);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
