import { Module, Global } from '@nestjs/common';
import { ColorService } from './color.service';

/**
 * @Global() decorator marks this module as global module.
 * Global modules are available everywhere in your application.
 * You can use exported services (ColorService) in other modules without importing this module.
 * Compare with country.module.ts and see cat.module.ts
 * https://docs.nestjs.com/modules#global-modules
 */
@Global()
@Module({
  providers: [ColorService],
  exports: [ColorService],
})
export class ColorModule {}
