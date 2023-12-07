import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';

@Module({
  controllers: [HospitalController],
})
export class HospitalModule {}
