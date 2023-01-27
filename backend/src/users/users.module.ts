import { MongooseModule } from '@nestjs/mongoose';
import { GlobalMiddleware } from './middlewares/global/global.middleware';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { User, UsersSchema } from './Schema/users.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }])],
  controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(GlobalMiddleware)
    .exclude({ path: '*', method: RequestMethod.ALL})
    .forRoutes(UsersController)
  }
}