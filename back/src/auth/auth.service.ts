import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { VerifyTokenDto } from './dto/verify-token.dto';
import { genSalt, hash, compare } from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const email = loginUserDto.email;
    const password = loginUserDto.password;
    try {
      const findUser = await this.userService.findOneLogin(email);
      console.log(`Usuario encontrado ${findUser[0].email}`);
      if (password !== findUser[0].password) {
        throw new UnauthorizedException();
      } else {
        console.log('Password error');
      }

      const payload = { sub: findUser[0].id, email: findUser[0].email };
      const token = await this.jwtService.signAsync(payload, {
        expiresIn: '1d',
      });
      console.log(token);
      return {
        message: 'Login success.',
        status: HttpStatus.OK,
        payload: {
          token,
          id: payload.sub,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async register(user: CreateUserDto) {
    const { password } = user;
    const hashPassword = await hash(password, 10);
    console.log(hashPassword);
    user = { ...user, password: hashPassword };
    return this.userService.create(user);
  }

  async verifyToken(token: VerifyTokenDto) {
    try {
      this.jwtService.verify(token.token, { secret: 'SECRET' });
      return { verified: true };
    } catch (error) {
      return { verified: false };
    }
  }

  async encryptPassword(password: string): Promise<string> {
    try {
      const salt = await genSalt(10);
      return hash(password, salt);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async passwordVerify(password: string, hash: string) {
    return await compare(password, hash);
  }
}
