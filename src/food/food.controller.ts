import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import {
  CreateFoodBodySchemeBasedDto,
  CreateFoodQuerySchemeBasedDto,
  GetAllFooQueryDto,
  createFoodBodySchema,
} from './dtos/food.dto';
import { CustomValidationPipe } from './pipes/custom-validation.pipe';
import {
  BodyQueryZodValidationPipe,
  ZodValidationPipe,
} from './pipes/zod-validation.pipe';

@Controller('food')
export class FoodController {
  /**
   * Bind Built-In Pipe | ParseIntPipe & ParseBoolPipe
   * Parse**Pipe is transformation pipe. It will convert method handler parameter into a specific type.
   * When it fails, it will throw BadRequestException.
   */
  @Get(':id/:yesOrNo')
  /* Binding pipe must be done but put it inside the decorator
   * See https://docs.nestjs.com/pipes#binding-pipes */
  getFoodByParam(
    @Param('id', ParseIntPipe) id: number,
    @Param('yesOrNo', ParseBoolPipe) yesOrNo: boolean,
  ) {
    return `return foo by id ${id} and yesOrNo ${yesOrNo}`;
  }

  /**
   * Bind Custom Pipe | CustomValidationPipe
   * use @UsePipes() decorator to bind custom pipe
   */
  @Get('custom')
  @UsePipes(CustomValidationPipe)
  getAllFood(@Query() query: GetAllFooQueryDto) {
    return `return all foo with limit: ${query.limit} and page: ${query.page}`;
  }

  /**
   * Bind Custom Pipe enhanced with Zod | ZodValidationPipe
   * this wil evaluate the request body based on the scheme createFoodBodySchema
   */

  @Post('scheme')
  @UsePipes(new ZodValidationPipe(createFoodBodySchema))
  createFooSchemeBased(@Body() body: CreateFoodBodySchemeBasedDto) {
    return `food created with name ${body.name} and price ${body.price} after passing scheme based pipe`;
  }

  /**
   * Bind Custom Pipe enhanced with Zod | BodyQueryZodValidationPipe
   * it will validate body and query at the same time
   */

  @Post('scheme-bodyquery')
  @UsePipes(
    new BodyQueryZodValidationPipe(createFoodBodySchema, createFoodBodySchema),
  )
  createFooBodyQuerySchemeBased(
    @Body() body: CreateFoodBodySchemeBasedDto,
    @Query() query: CreateFoodQuerySchemeBasedDto,
  ) {
    return `food created with body [name ${body.name} and price ${body.price}] and query [limit ${query.limit}, page ${query.page}] after passing body query scheme based pipe`;
  }
}
