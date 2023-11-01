import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get('404')
  findAll(): string {
    /**
     * To throw an exception, use the HttpException class.
     * The HttpException constructor takes two required arguments which determine the response:
     * - The response argument defines the JSON response body. It can be a string or an object as described below.
     * - The status argument defines the HTTP status code.
     */

    throw new HttpException('Not Found', HttpStatus.NOT_FOUND, {
      cause: 'Employee not found',
      description: 'Some error description',
    });

    /**
     * By default, the JSON response body contains two properties:
     * statusCode: defaults to the HTTP status code provided in the status argument
     * message: a short description of the HTTP error based on the status
     *
     * To override just the message portion of the JSON response body, supply a string in the response argument.
     * To override the entire JSON response body, pass an object in the response argument.
     *
     * This will return a JSON response with the following body:
     * {
     *  "statusCode": 404,
     *  "message": "Not Found"
     * }
     */
  }

  @Get('forbidden')
  findForbidden() {
    /**
     * Nest has a built-in exception filters
     * - BadRequestException
     * - UnauthorizedException
     * - NotFoundException
     * - ForbiddenException
     * - NotAcceptableException
     * - RequestTimeoutException
     * - BadGatewayException
     * - ConflictException
     * See https://docs.nestjs.com/exception-filters#built-in-http-exceptions
     */
    throw new ForbiddenException("You don't have permission to access");
    // RESPONSE:
    // {
    //   "message": "You don't have permission to access",
    //   "error": "Forbidden",
    //   "statusCode": 403
    // }
  }

  @Get('bad')
  findBadRequest() {
    throw new BadRequestException('You have a bad request', {
      cause: 'Some error cause',
      description: 'Some error description',
    });
    // RESPONSE:
    // {
    //   "message": "You have a bad request",
    //   "error": "Some error description",
    //   "statusCode": 400
    // }
  }
}
