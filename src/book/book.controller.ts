import { Body, Controller, Post, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './book.dto';
import { Book } from './book.interface';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  async create(@Body() book: CreateBookDto) {
    return this.bookService.create(book);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
