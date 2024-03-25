import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserSignUpDto } from './dto/user-register.dto';
import { UserEntity } from './entities/user.entity';
import { UserSignInDto } from './dto/user-login.dto';
import { AuthorizeRoles } from 'src/utility/decorators/authorize-roles.decorator';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { AuthorizeGuard } from 'src/utility/guards/authorization.guard';
import { Roles } from 'src/utility/common/user.enum';

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
    return this.usersService.findOne(id);
  }
  @AuthorizeRoles(Roles.ADMIN, Roles.SUPER_ADMIN, Roles.GUILD_PRES)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Patch('role/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserRoleDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
