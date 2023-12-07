# Hospital - Interceptor

## What is Interceptor?

An interceptor is a class annotated with the @Injectable() decorator and implements the NestInterceptor interface.

## What is Interceptor Used For?

Interceptors have a set of useful capabilities which are inspired by the Aspect Oriented Programming (AOP) technique. They make it possible to:

    - bind extra logic before / after method execution
    - transform the result returned from a function
    - transform the exception thrown from a function
    - extend the basic function behavior
    - completely override a function depending on specific conditions (e.g., for caching purposes)

## When Is Interceptor Executed?

## What is NestInterceptor interface

NestInterceptor implements the intercept() method, which takes two arguments:

- Execution context
- Call Handler
