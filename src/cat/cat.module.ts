import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CountryModule } from 'src/country/country.module';

/**
 * This cat module will be used to explain
 * PIPE
 * in NestJS
 *
 * Here, we will learn:
 * - How to use built-in pipe
 * - How to create and implement custom pipe
 * - How to use ValidationPipe and class-validator
 *
 * See @link cat.controller.ts for more details
 */

@Module({
  // `imports` lists modules that this module depends on
  // cat module can use providers from imported modules
  // in this case, cat module can use CountryService
  //
  imports: [CountryModule],
  controllers: [CatController],
  providers: [CatService],
  // You can also re-export the module to make it available to other modules
  // See https://docs.nestjs.com/modules#module-re-exporting
  exports: [CountryModule],
})
export class CatModule {}
