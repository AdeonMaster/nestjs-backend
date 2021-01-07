import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from '../test/test.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
