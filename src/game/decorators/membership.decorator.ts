import { Reflector } from '@nestjs/core';

export const Memberships = Reflector.createDecorator<string[]>();
