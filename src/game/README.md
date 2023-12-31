# GAME - GUARD

## What Is Guard?

A guard is a class annotated with the `@Injectable()` decorator, which implements the `CanActivate` interface.

## What Guard Is Used For?

They determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time.

## Why Use Guard, Instead of Middleware?

Middleware, by its nature, is dumb. It doesn't know which handler will be executed after calling the next() function. On the other hand, Guards have access to the ExecutionContext instance, and thus know exactly what's going to be executed next.

## When is Guard executed?

Guards are executed after all middleware, but before any interceptor or pipe.

## How to Create Guard?

Go to [src/game/guards/auth.guard.ts](./guards/auth.guard.ts)

## How to Apply Guard?

You can apply guard in handler, controller, or globally

Guard in handler and controller : `src/game/game.controller.ts`

To apply globally, use this syntax in `main.ts`

```
const app = await NestFactory.create(AppModule);
app.useGlobalGuards(new RolesGuard());
```

To apply globally but also enable to inject dependencies,
apply guard in module

```
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
```

## Role Based Guard

Sometimes, we want to allow some handlers based on role.
For example, the create() handler in [src/game/game.controller](./game.controller.ts#12) is accessible only by admin and developer.

To create role based guard, you have to attach allowed roles in the metadata of the handler or controller class. Then take it in the guard file.

See [src/game/guards/membership.guard](./guards/membership.guard.ts) and [src/game/guards/roles.guard](./guards/roles.guard.ts)
