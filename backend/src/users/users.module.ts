import { AppModule } from './../app.module';
import { GlobalMiddleware } from './middlewares/global/global.middleware';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { User, UserSchema } from './Schema/users.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
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