# Food Module - Pipes

## What is Pipe?

A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.

## What is Pipe used for?

Pipes have two typical use cases:

- transformation: transform input data to the desired form (e.g., from string to integer)
- validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception

## Difference Btw Pipe and Middleware?

- Pipes are used for data validation and transformation while middleware is used for request and response interception and manipulation
- Pipes are executed after the request reaches the route handler and before the route handler method is called.
  Middleware is executed before the request reaches the route handler.
- Middleware can be applied at both the global application level and the route-specific level.

## How To Use Built-In Pipe?

Nest has many Built-In Pipe:

- `ValidationPipe` (for object)
- `ParseIntPipe`
- `ParseFloatPipe`
- `ParseBoolPipe`
- `ParseArrayPipe`
- `ParseUUIDPipe`
- `ParseEnumPipe`
- `DefaultValuePipe`
- `ParseFilePipe`

Let's take a quick look at using `ParseIntPipe`. This is an example of the transformation use case, where the pipe ensures that a method handler parameter is converted to a JavaScript integer (or throws an exception if the conversion fails).

See food.controller.ts on getFoodByParam for examples

## How to Create and Use Custom Pipe?

See food/pipes/custom-validation.pipe to create basic validation pipe

See food/pipes/zod-validation.pipe to create basic validation with help of zod

See food/dtos/special-food.dto.ts to create class-validator based validation
