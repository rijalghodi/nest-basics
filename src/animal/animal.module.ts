import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';

/**
 * HELLO! Welcome to Animal Module! Here we learn about
 * -------------- CONTROLLERS ----------------
 * What is controller?
 * Controllers are classes that handle incoming requests and returning responses to the client.
 * See animal.controller.ts for more details
 */

@Module({
  controllers: [AnimalController],
})
export class AnimalModule {}
