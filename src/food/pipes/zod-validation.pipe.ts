import {
  ArgumentMetadata,
  PipeTransform,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { ZodObject } from 'zod';

// Using ZOD Scheme to evaluate the request value
@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject<any>) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    if (!metadata) throw new BadRequestException('Must be provide metadata');

    try {
      this.schema.parse(value);
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}

// ZOD Scheme Validation Pipe to validate body and query at the same time

@Injectable()
export class BodyQueryZodValidationPipe implements PipeTransform {
  constructor(
    private querySchema: ZodObject<any, any>,
    private bodySchema: ZodObject<any, any>,
  ) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      try {
        this.querySchema.parse(value);
      } catch (error) {
        throw new BadRequestException('Query Validation failed', error);
      }
    } else if (metadata.type === 'body') {
      try {
        this.bodySchema.parse(value);
      } catch (error) {
        throw new BadRequestException('Body Validation failed', error);
      }
    }
    return value;
  }
}
