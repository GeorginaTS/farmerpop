import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import databaseConfig from './config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('db'),
    }),
    UserModule,
    ProductModule,
    //AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
