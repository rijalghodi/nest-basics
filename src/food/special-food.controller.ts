import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateSpecialFoodDto } from './dtos/special-food.dto';

@Controller('special-food')
export class SpecialFoodController {
  /**
   * Class-Validator Based Validation
   *
   * See CreateFooBodyDto! It is using class-validator to define properties
   *
   * add new ValidationPipe() to the controller method
   * or provide ValidationPipe() globally in main.ts or in the module See food.module.ts
   */

  @Post()
  createSpecialFood(@Body(new ValidationPipe()) body: CreateSpecialFoodDto) {
    return `food created with name ${body.name} and price ${
      body.price
    } with ingradients ${body.ingradients.join(
      ', ',
    )} after passing custom pipe`;
  }
}
