# Metadata

## What is Metadata in NestJS?

In NestJS, metadata refers to additional information associated with classes, methods, properties, or parameters in your application. This metadata is often used to provide configuration, annotations, or instructions that can be used by the NestJS framework at runtime.

Metadata is commonly associated with decorators in NestJS. Decorators are special types of functions prefixed with the `@` symbol that are used to enhance or modify the behavior of classes, methods, or properties. Decorators in NestJS often work by attaching metadata to the decorated elements.

Here are some common use cases for metadata in NestJS:

1. **Module Metadata**: When defining modules in NestJS using the `@Module` decorator, you provide metadata to configure the module, such as specifying controllers, providers, and imports.

   ```typescript
   @Module({
     controllers: [AppController],
     providers: [AppService],
   })
   export class AppModule {}
   ```

2. **Route Metadata**: In controllers, you use decorators like `@Get`, `@Post`, etc., to define routes. These decorators attach metadata about the route to the corresponding methods.

   ```typescript
   @Controller('cats')
   export class CatsController {
     @Get()
     findAll(): string {
       return 'This action returns all cats';
     }
   }
   ```

3. **Parameter Metadata**: Metadata can also be attached to method parameters using decorators. For example, the `@Param` decorator attaches metadata to route parameters.

   ```typescript
   @Get(':id')
   findOne(@Param('id') id: string): string {
     return `This action returns a cat with id ${id}`;
   }
   ```

## Custom Metadata

3. **Custom Metadata**: You can create and use custom decorators to attach metadata for your specific application logic. This allows you to organize and retrieve metadata in a way that makes sense for your use case.

   ```typescript
   const MyCustomDecorator = (data: string) => {
     return (target: any, key?: string, descriptor?: any) => {
       Reflect.defineMetadata('customMetadataKey', data, target, key);
     };
   };

   @Controller('example')
   export class ExampleController {
     @MyCustomDecorator('custom data')
     customMethod(): void {
       // Method implementation
     }
   }
   ```

   To access and retrieve metadata at runtime, NestJS provides the `Reflector` class, which allows you to inspect and query metadata associated with classes, methods, or parameters.
