import { IsInt, IsString } from 'class-validator';
import { z } from 'zod';

/**
 * DTO with no class validator
 */
export class GetAllFooQueryDto {
  limit: number;
  page: number;
}

/**
 * Pipe using DTO with class validator
 */
export class CreateFoodBodyDto {
  @IsString()
  name: string;

  @IsInt()
  price: number;
}

// Scheme based pipe
export const createFoodBodySchema = z
  .object({
    name: z.string(),
    price: z.number(),
  })
  .required();

export type CreateFoodBodySchemeBasedDto = z.infer<typeof createFoodBodySchema>;

// Scheme based pipe
export const createFoodQuerySchema = z
  .object({
    limit: z.string(),
    page: z.number(),
  })
  .required();

export type CreateFoodQuerySchemeBasedDto = z.infer<
  typeof createFoodQuerySchema
>;
