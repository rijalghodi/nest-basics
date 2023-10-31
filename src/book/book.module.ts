import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

/**
 * Hello! This is book module. We will learn about:
 * PROVIDER & MODULE
 */

@Module({
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
