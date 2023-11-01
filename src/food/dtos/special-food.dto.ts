import { IsInt, IsString, IsArray } from 'class-validator';

/**
 * Class Validator
 *
 * See special-food.controller.ts to see class-validator based validation
 */

export class CreateSpecialFoodDto {
  @IsString()
  name: string;

  @IsInt()
  price: number;

  @IsArray()
  ingradients: string[];
}
