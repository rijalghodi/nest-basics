import { Injectable } from '@nestjs/common';

@Injectable()
export class ColorService {
  private readonly colors: string[] = [
    'red',
    'blue',
    'green',
    'black',
    'white',
    'yellow',
    'purple',
    'orange',
  ];

  public findAll(): string[] {
    return this.colors;
  }

  public findRandom(): string {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }
}
