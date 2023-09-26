import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

import { GetUserLoginDto } from './dto/get-user-login.dto';
import { VerifyTokenDto } from './dto/verify-token.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // async validatePassword(password: string, encriptedPassword: string) {
  //   return compare(password, encriptedPassword);
  // }

  async login(user: GetUserLoginDto) {
    return 'Login Service';
    // const { email, password } = user;
    // const findUser = await this.userService.findOneLogin(email);
    // if (!findUser)
    //   throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    //    const checkPassword = await this.validatePassword(
    //      password,
    //      findUser.password,
    //    );
    //    if (!checkPassword)
    //     throw new HttpException('INCORRECT_PASSWORD', HttpStatus.FORBIDDEN);
    //    const payload = {
    //     sub: findUser.id,
    //     email: findUser.email,
    //   };
    //   const token = await this.jwtService.signAsync(payload, { expiresIn: '1d' });
    //   return {
    //     message: 'Login success.',
    //     status: HttpStatus.OK,
    //     payload: {
    //       token,
    //       id: payload.sub,
    //     },
    //   };
    // }
    // async register(user: RegisterUserDto) {
    //   const { password } = user;
    //   const hashPassword = await hash(password, 10);
    //   user = { ...user, password: hashPassword };
    //   return this.userService.create(user);
    // }
    // async verifyToken(token: VerifyTokenDto) {
    //   try {
    //     this.jwtService.verify(token.token, { secret: 'SECRET' });
    //     return { verified: true };
    //   } catch (error) {
    //     return { verified: false };
    //   }
  }
}
