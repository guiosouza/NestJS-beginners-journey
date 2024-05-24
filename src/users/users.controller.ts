import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users') // handle '/users' route
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post() // CREATE USER BY THE ROUTE: '/users'
  create(
    @Body(ValidationPipe)
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // UPDATE USER BY THE ROUTE: 'users/:id'
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // UPDATE USER BY THE ROUTE: 'users/:id'
  delte(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
