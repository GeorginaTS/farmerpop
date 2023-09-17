import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
    // return 'soy espacio service';
  }

  async findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findOneLogin(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
