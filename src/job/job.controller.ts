import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('job')
export class JobController {
  @Get()
  findAll() {
    return 'This action returns all jobs';
  }
}
