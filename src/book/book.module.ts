import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

/**
 * Hello! This is book module. We will learn about:
 * PROVIDER & MODULE
 */

@Module({
  controllers: [BookController],
  /**
   * providers is the list of classes that will be instantiated by Nest.
   * and that may be shared at least once across the whole module.
   * BookService is a provider. Because I want to use it in BookController.
   * So, BookService must be instantiated by Nest.
   * https://docs.nestjs.com/providers#provider-registration
   */
  providers: [BookService],
})
export class BookModule {}
