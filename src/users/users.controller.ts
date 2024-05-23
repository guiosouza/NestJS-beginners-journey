import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // handle '/users' route
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /*
  PATCH '/users/:id'
  DELETE '/users/:id'
  */

  // -- ALL USERS --
  // GET USER BY THE ROUTE: '/users' or using query param '/users?role=value&age=etc
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  // -- SINGLE USER
  @Get(':id') // GET USER BY THE ROUTE: 'users/:id'
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() // CREATE USER BY THE ROUTE: '/users'
  create(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.usersService.create(user);
  }

  @Patch(':id') // UPDATE USER BY THE ROUTE: 'users/:id'
  update(@Param('id') id: string, @Body() userUpdate: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') // UPDATE USER BY THE ROUTE: 'users/:id'
  delte(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
