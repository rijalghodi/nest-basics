import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * How To Create A Guard?
 *
 * Every guard must implement a canActivate() function.
 * This function should return a boolean, indicating whether
 * the current request is allowed or not.
 * It can return the response either synchronously or asynchronously
 * (via a Promise or Observable).
 * Nest uses the return value to control the next action:
 * - if it returns true, the request will be processed.
 * - if it returns false, Nest will deny the request.
 */

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    /**
     * canActivate() has a single parameter, ExecutionContext. {@link src/job/README.md}
     */
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log('request body', request.body);
    console.log('request headers', request.headers);
    console.log('request query', request.query);
    console.log('request params', request.params);
    /**
     * Some logics here
     */
    return true;
  }
}
