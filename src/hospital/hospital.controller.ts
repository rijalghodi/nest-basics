import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('hospital')
export class HospitalController {
  @Get()
  findAll() {
    return 'This action returns all hospitals';
  }
}
