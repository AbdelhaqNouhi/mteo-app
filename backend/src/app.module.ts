import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/service/users.service';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
