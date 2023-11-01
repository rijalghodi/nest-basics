import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * Create CLASS Middleware
 *
 * middleware is created by implementing the NestMiddleware interface.
 * It hase one method, use(), which takes three arguments: req, res, and next.
 * Inside the use() method, we can do whatever we want with the request and response objects,
 * and then we must call next() to pass control to the next middleware function.
 *
 * Applying Middleware
 * @link src/app.module.ts
 */

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    /**
     * This middleware will console.log(request) before the request is handled.
     */
    console.log('Request... I am Class Middleware');
    next();
  }
}

/**
 * Create FUNCTIONAL MIDDLEWARE
 *
 * We can also create middleware as a function.
 * This is useful any time your middleware doesn't need any dependencies.
 * See @link main.ts to look how to apply functional middleware as global middleware
 * It can also be applied to consumer in any modules.
 */

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request... I am Functional Middleware`);
  next();
}
