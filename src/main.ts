import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './dog/middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger); // Apply functional middleware as global middleware See @link src/dog/middlewares/logger.middleware
  await app.listen(3000);
}
bootstrap();
