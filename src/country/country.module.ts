import { Module } from '@nestjs/common';
import { CountryService } from './country.service';

@Module({
  providers: [CountryService],
  // `exports` lists providers that this module exports and this providers can be used in other modules
  // https://docs.nestjs.com/modules#shared-modules
  exports: [CountryService],
})
export class CountryModule {}
