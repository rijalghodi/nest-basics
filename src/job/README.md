# Execution Context

## What is Execution Context?

In NestJS, the execution context refers to the context in which a particular piece of code is executed.

See [src/job/interctors/logging.interceptor](./interceptors//logging.interceptor.ts) for the implementation

## What Can Possessed Execution Context?

- Guard
- Interceptor
- Filters

## What Inside Execution Context?

ExecutionContext is an object that that contains two things:

1. Execution context, which includes

   - `.getClass`: The class controller where this interceptor is executed.
   - `.getHandler`: The handler where this interceptor is executed.

2. ArgumentHost, which includes
   - The protocol of the application execution, such as http, graphql, websocket: `.getType()` or `.getArgByIndex()`.
   - Functions to switch the application execution: `.switchToRpc`, `.switchToHttp`, `.switchToWs`.
   - Handler arguments `.getArgs()` containing request, response, next.
     - Request is an object representing the http request, containing method, body, params, query, url, etc.
     - Response is an object containing functions that manipulate the response, such as `.send(data)`, `.status(code)`, `.header(name, value)`, `.json(data)`, `.redirect(status, url)`.
     - Next is a method that calls the next step.

## What `ExecutionContext` object looks like?

`ExectutionContext` Interface:

```typescript
export interface ExecutionContext extends ArgumentsHost {
  /**
   * Returns the type of the controller class which the current handler belongs to.
   */
  getClass<T>(): Type<T>;
  /**
   * Returns a reference to the handler (method) that will be invoked next in the
   * request pipeline.
   */
  getHandler(): Function;
}
```

`ArgumentHost` Interface:

```typescript
export interface ArgumentsHost {
  /**
   * Returns the array of arguments being passed to the handler.
   */
  getArgs<T extends Array<any> = any[]>(): T;
  /**
   * Returns a particular argument by index.
   * @param index index of argument to retrieve
   */
  getArgByIndex<T = any>(index: number): T;
  /**
   * Switch context to RPC.
   * @returns interface with methods to retrieve RPC arguments
   */
  switchToRpc(): RpcArgumentsHost;
  /**
   * Switch context to HTTP.
   * @returns interface with methods to retrieve HTTP arguments
   */
  switchToHttp(): HttpArgumentsHost;
  /**
   * Switch context to WebSockets.
   * @returns interface with methods to retrieve WebSockets arguments
   */
  switchToWs(): WsArgumentsHost;
  /**
   * Returns the current execution context type (string)
   */
  getType<TContext extends string = ContextType>(): TContext;
}
```
