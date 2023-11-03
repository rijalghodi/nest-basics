import { Body, Controller, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { CreateGameDto, GetAllGameDto, PlayGameDto } from './dtos/game.dto';
import { LevelGuard } from './guards/level.guard';
import { Roles } from './decorators/roles.decorator';
import { MembershipGuard } from './guards/membership.guard';

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
  @UseGuards(RolesGuard) // <= Apply RolesGuard to this handler
  @Roles(['admin', 'developer'])
  create(@Body() createGameDto: CreateGameDto) {
    return `Game ${createGameDto.name} created!`;
  }

  @Post('play')
  @UseGuards(new LevelGuard(1)) // <= Apply RolesGuard to this handler
  play(@Body() body: PlayGameDto) {
    return `Game level ${body.level} played successfully!`;
  }

  @Post('premium')
  @UseGuards(MembershipGuard)
  @SetMetadata('membership', ['premium', 'vip'])
  playPremiumGame(@Body() body: GetAllGameDto) {
    return `Premium game is played successfully. Your membership is ${body.membership}!`;
  }
}
