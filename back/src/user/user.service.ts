import { Injectable } from '@nestjs/common';
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

  async login(loginUserDto: LoginUserDto) {
    try {
      console.log(
        ` email loginUserDto ${loginUserDto.email} -- ${loginUserDto.password}`,
      );
      const toLogin = await this.userRepository.findOne({
        where: { email: loginUserDto.email },
      });
      console.log(`user con email : ${toLogin.email}`);
      return toLogin;
    } catch (error) {
      throw error;
    }
  }

  async findOneLogin(email: string) {
    try {
      console.log(email);
      // const result = await this.userRepository.find({
      //   where: { email: email },
      // });
      //console.log(result);
      //return result;
    } catch (error) {
      throw error;
    }
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
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
