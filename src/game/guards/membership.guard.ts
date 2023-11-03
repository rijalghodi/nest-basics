import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

/**
 * membership Based using Guards Set Metadata
 */

@Injectable()
export class MembershipGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
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
