import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryService {
  private countries: string[] = ['indonesia', 'usa', 'japan', 'england'];

  create(country: string) {
    this.countries.push(country);
  }

  findAll(): string[] {
    return this.countries;
  }

  findRandom(): string {
    const index = Math.floor(Math.random() * this.countries.length);
    return this.countries[index];
  }
}
