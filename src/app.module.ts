import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestBodyParserMiddleware } from './middlewares/request-body-parser.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestBodyParserMiddleware)
      .forRoutes({
        path: '/cats',
        method: RequestMethod.POST
      })
  }
}
