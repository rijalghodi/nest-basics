import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Req,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';
import { AnimalBodyDto, AnimalQueryDto } from './dtos/animal.dto';

/**
 * Controller use decorator @Controller to categorize the request
 * this controller will handle incoming request with path /animal
 */

// import { Controller, Get } from '@nestjs/common';

@Controller('animal')
export class AnimalController {
  /**
   * Simple GET example
   * this method will handle incoming request with method GET and path /animal
   * @returns string
   */
  @Get()
  findRandomAnimal(): string {
    return `Return random animal: ${Math.random() > 0.5 ? 'cat' : 'dog'}`;
  }

  /**
   * POST example with body
   */
  @Post()
  createAnimal(@Body() body: AnimalBodyDto): string {
    return `Animal ${body.name} created`;
  }

  /**
   * GET example with query
   */
  @Get('all')
  findAllAnimal(@Query() query: AnimalQueryDto): string {
    return `Return all animals with search ${query.search} and limit ${query.limit}`;
  }

  /**
   * GET and accessing request
   */
  @Get('request')
  findAnimalWithRequest(@Req() request: Request): string {
    return `Return animal with request ${request}`;
  }

  /**
   * Custom Header & Redirect
   * @link https://docs.nestjs.com/controllers#redirection
   */
  @Get('redirect')
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 301)
  // Redirect to https://nestjs.com with status code 301, but...
  getDocs() {
    // but, if the methods return object with url and statusCode,
    // it will redirect to the url with the statusCode
    if (Math.random() > 0.5) {
      return { url: 'http://localhost:3000', statusCode: 302 };
    }
  }

  /**
   * GET example with params
   * @link https://docs.nestjs.com/controllers#route-parameters
   */
  @Get(':id')
  findOneAnimal(@Param() param: { id: string }): string {
    return `Return animal with param id: ${param.id}`;
  }

  /**
   * GET example with body, query, and params
   */
  @Get('complex/:id')
  findAnimalWithBodyQueryParams(
    // this is how to get specific body, the body is {name: 'value', ...}
    @Body('name') name: string,
    // this is how to get specific query, the query is {..., search: 'value', ...}
    @Query('search') search: string,
    // this is how to get specific param, the param is {..., id: 'value', ...}
    @Param('id') id: string,
  ): string {
    return `Return animal with body: [name: ${name}], query: [search: ${search}], and param: [id: ${id}]`;
  }
}
