import { Module, ValidationPipe } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { SpecialFoodController } from './special-food.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [FoodController, SpecialFoodController],
  providers: [
    FoodService,

    /**
     * Global Pipe
     *
     * See https://docs.nestjs.com/pipes#global-scoped-pipes
     *
     * This will apply ValidationPipe to all controllers inside this module
     * This will ensure that all class-validator based validation will be applied
     * See food/special-food.controller.ts
     */
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class FoodModule {}
