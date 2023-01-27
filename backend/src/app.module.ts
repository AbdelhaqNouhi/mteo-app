import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/service/users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mteo-app'),
    UsersModule
  ],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}