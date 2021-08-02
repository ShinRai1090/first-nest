import { Module } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

import { UserController } from './user.controller';

import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}
}
