import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

/**
 * ROLE BASED GUARD
 *
 * This is how to extract allowed roles from the attached metadata using @SetMetadata() method
 * See src/game/game.controller
 *
 */

@Injectable()
export class MembershipGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    /* Here we extract metadata that has name 'membership' and
     * the the handler context.getHandler */
    const memberships = this.reflector.get('membership', context.getHandler());
    console.log('membership', memberships);
    if (!memberships) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const membership = request.body.membership;
    return memberships.includes(membership);
  }
}
