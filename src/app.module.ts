import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { BookModule } from './book/book.module';
import { AnimalModule } from './animal/animal.module';
import { CountryModule } from './country/country.module';
import { ColorModule } from './color/color.module';

@Module({
  imports: [CatModule, BookModule, AnimalModule, CountryModule, ColorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
