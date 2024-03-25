import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { CurrentUserMiddleware } from './utility/middlewares/current-user.middleware';
import { UsersModule } from './users/users.module';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, IssuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(CurrentUserMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
