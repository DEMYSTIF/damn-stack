import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Post()
    async createUser(@Body() userDto: UserDto) {
        return await this.userService.create(userDto);
    }

    @Get()
    async fetchUsers() {
        return this.userService.readAll();
    }

    @Put('/update/:id')
    async updateUser(@Param('id') id:string, @Body() userDto:UserDto) {
        return this.userService.update(id, userDto);
    }

    @Delete('/delete/:id')
    async deleteUser(@Param('id') id:string) {
        return this.userService.delete(id);
    }
}
