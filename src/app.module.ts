import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { BookModule } from './book/book.module';
import { AnimalModule } from './animal/animal.module';
import { CountryModule } from './country/country.module';
import { ColorModule } from './color/color.module';
import { DogModule } from './dog/dog.module';
import { EmployeeModule } from './employee/employee.module';
import { FoodModule } from './food/food.module';
import { GameModule } from './game/game.module';
import { HospitalModule } from './hospital/hospital.module';
import { JobModule } from './job/job.module';
import { KingdomModule } from './kingdom/kingdom.module';

@Module({
  imports: [
    CatModule,
    BookModule,
    AnimalModule,
    CountryModule,
    ColorModule,
    DogModule,
    EmployeeModule,
    FoodModule,
    GameModule,
    HospitalModule,
    JobModule,
    KingdomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
