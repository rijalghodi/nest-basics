import {
  ArgumentMetadata,
  PipeTransform,
  Injectable,
  NotAcceptableException,
  BadRequestException,
} from '@nestjs/common';

interface GetAllFooQueryDto {
  limit: number;
  page: number;
}

/**
 * How to Create Custom Validation Pipe?
 *
 * 1. Create a class that implements PipeTransform interface
 * 2. Implement the transform method
 *    The transform method takes two arguments:
 *    - value: the value passed into the method handler
 *    - metadata: an object containing metadata about the value (body, query, param, etc)
 * 3. Apply it to the method handler. See src/food/food.controller.ts
 */

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: GetAllFooQueryDto, metadata: ArgumentMetadata) {
    console.log('value', value);
    console.log('metadata', metadata.type);
    if (metadata.type === 'body') {
      throw new NotAcceptableException();
    }

    if (!Number.isNaN(value.limit)) {
      throw new BadRequestException('Limit must be a number');
    }
    if (!Number.isNaN(value.page)) {
      throw new BadRequestException('Page must be a number');
    }
    return value;
  }
}
