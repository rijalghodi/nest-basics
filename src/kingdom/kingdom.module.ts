import { Module } from '@nestjs/common';
import { KingdomController } from './kingdom.controller';

@Module({
  controllers: [KingdomController]
})
export class KingdomModule {}
