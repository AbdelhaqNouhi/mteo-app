import { GlobalMiddleware } from './middlewares/global/global.middleware';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: []
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(GlobalMiddleware)
    .exclude({ path: '*', method: RequestMethod.ALL})
    .forRoutes(UsersController)
  }
}
