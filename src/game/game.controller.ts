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
  /**
   * How to apply Role Based Guard using custom decorator?
   *
   * - Create a custom decorator to attach metadata using Reflector.createDecorator. See ./decoratos/roles.decorator
   * - Create a guard that can read the metadata. See ./guards/roles.guard
   * - Apply that guard here and define what roles that allowed here
   */
  @Roles(['admin', 'developer'])
  @UseGuards(RolesGuard) // <= Apply RolesGuard to this handler
  create(@Body() createGameDto: CreateGameDto) {
    return `Game ${createGameDto.name} created!`;
  }

  @Post('play')
  @UseGuards(new LevelGuard(1)) // <= Apply RolesGuard to this handler
  play(@Body() body: PlayGameDto) {
    return `Game level ${body.level} played successfully!`;
  }

  @Post('premium')
  /**
   * How to apply Role Based Guard using low-level @SetMetadata decorator?
   */
  @UseGuards(MembershipGuard)
  // This is how to set metadata with name 'membership'
  // It will be accessed in ./guards/membership.guard
  @SetMetadata('membership', ['premium', 'vip']) // <====
  playPremiumGame(@Body() body: GetAllGameDto) {
    return `Premium game is played successfully. Your membership is ${body.membership}!`;
  }
}
