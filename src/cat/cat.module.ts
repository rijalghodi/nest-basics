import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

/**
 * This cat module will be used to explain
 * PIPE
 * in NestJS
 *
 * Here, we will learn:
 * - How to use built-in pipe
 * - How to create and implement custom pipe
 * - How to use ValidationPipe and class-validator
 *
 * See @link cat.controller.ts for more details
 */

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
