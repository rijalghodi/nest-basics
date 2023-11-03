import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { CreateGameDto, PlayGameDto } from './dtos/game.dto';
import { LevelGuard } from './guards/level.guard';
import { Roles } from './decorators/roles.decorator';

/**
 * How To Apply Guard?
 *
 * Use @UseGuards() to bind single or a list of guard classes.
 * For example @UseGuards(AuthGuard, RolesGuard).
 *
 * You can also apply guards to controllers or handlers.
 */

@Controller('game')
@UseGuards(AuthGuard) // <= Apply AuthGuard to all handlers
export class GameController {
  @Post()
  @Roles(['admin'])
  @UseGuards(RolesGuard) // <= Apply RolesGuard to this handler
  create(@Body() createGameDto: CreateGameDto) {
    return `Game ${createGameDto.name} created!`;
  }

  @Post('play')
  @UseGuards(new LevelGuard(1)) // <= Apply RolesGuard to this handler
  play(@Body() body: PlayGameDto) {
    return `Game level ${body.level} played successfully!`;
  }

  @Get()
  findAll() {
    return 'This action returns all games';
  }
}
