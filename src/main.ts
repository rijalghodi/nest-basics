import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { logger } from './dog/middlewares/logger.middleware';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Apply Global Middleware
   * See https://docs.nestjs.com/middleware#global-middleware
   * See src/dog/README.md
   */
  // app.use(logger);

  /**
   * Apply Global Pipe
   * See https://docs.nestjs.com/pipes#global-scoped-pipes
   * See src/food/README.md
   */
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
