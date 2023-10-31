import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

/**
 * @Injectable() decorator marks a class as a provider that can be injected
 * as dependency.
 */
@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  create(book: Book) {
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }
}
