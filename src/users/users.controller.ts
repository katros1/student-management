import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSignUpDto } from './dto/user-register.dto';
import { UserEntity } from './entities/user.entity';
import { UserSignInDto } from './dto/user-login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() userSignUp:UserSignUpDto):Promise<{user:UserEntity}> {
    return {user: await this.usersService.signup(userSignUp)}
  }

  @Post('login')
  async signin(@Body() userSignin:UserSignInDto): Promise<{
    accessToken: string;
    user: UserEntity;
}> {
    const user =  await this.usersService.signin(userSignin);
    const accessToken = await this.usersService.accessToken(user);

    return {accessToken, user}
  }

  @Get()
  findAll() {
    return "hi";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
