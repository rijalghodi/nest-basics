import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './cat.dto';
import { Cat } from './cat.interface';
import { CountryService } from 'src/country/country.service';
import { ColorService } from 'src/color/color.service';

@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly countryService: CountryService,
    // colorService is service from global module, See color.module.ts
    private readonly colorService: ColorService,
  ) {}

  @Post()
  async create(@Body() body: CatDto) {
    const country = this.countryService.findRandom();
    const color = this.colorService.findRandom();
    this.catService.create({
      name: body.name,
      country: body.country ?? country,
      color: body.color ?? color,
    });
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
