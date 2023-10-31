import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { BookModule } from './book/book.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [CatModule, BookModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
