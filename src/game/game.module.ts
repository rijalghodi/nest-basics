import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';

@Module({
  controllers: [GameController],
  providers: [
    GameService,

    /**
     * Global Roles Guard
     */
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
      useValue: ['admin'],
    },
  ],
})
export class GameModule {}
