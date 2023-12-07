import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';

/**
 * ROLE BASED GUARD
 *
 * This is how to extract allowed roles from the attached metadata
 */

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    /* Here we extract metadata that has the decorator target (Roles)
     * and the  the handler context.getHandler */
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log('roles', roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const role = request.body.role;
    return roles.includes(role);
  }
}
