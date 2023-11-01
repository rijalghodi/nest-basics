import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { LoggerMiddleware, logger } from './middlewares/logger.middleware';

@Module({
  providers: [DogService],
  controllers: [DogController],
})
export class DogModule implements NestModule {
  /**
   * Applying Middleware
   *
   * Middleware is applied inside the module, in the configure() method.
   *
   * Middleware can be applied to the entire application or to specific routes.
   * To apply middleware to the entire application, we can use the configure() method of the NestModule interface.
   * forRoutes() method to specify the route to which the middleware should apply.
   *
   * See @link src/dog/middlewares/logger.middleware.ts to look how to create middleware
   */
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger) // <-- multiple middleware
      .forRoutes({ path: 'dog', method: RequestMethod.GET });

    /**
     * The forRoutes() method can take a single string, multiple strings, a RouteInfo object,
     * a controller class and even multiple controller classes. In most cases you'll probably
     * just pass a list of controllers separated by commas. Examples:
     *
     * .forRoutes('cat');
     *
     * .forRoutes('cat', 'dog');
     *
     * .forRoutes(CatController, DogController, RabbitsController);
     *
     * .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
     *
     * .forRoutes(
     *   { path: 'cat', method: RequestMethod.GET },
     *   { path: 'dog', method: RequestMethod.GET },
     * );
     */

    /**
     * QUESTION: Why my middleware in this module works for all routes in other module?
     * Example: .forRoutes('book'); is working for routes in book module, even though
     * I specify the middleware in dog module.
     */
  }
}
