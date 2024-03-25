import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueInchargeDto } from './dto/update-issue-incharge.dto';
import { AuthorizeRoles } from 'src/utility/decorators/authorize-roles.decorator';
import { Roles } from 'src/utility/common/user.enum';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { AuthorizeGuard } from 'src/utility/guards/authorization.guard';
import { CurrentUser } from 'src/utility/decorators/current-user.decorators';
import { UserEntity } from 'src/users/entities/user.entity';
import { UpdateIssueStatusDto } from './dto/update-issue-status.dto';

@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @AuthorizeRoles(Roles.STUDENT)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Post()
  create(@Body() createIssueDto: CreateIssueDto, @CurrentUser() currentUser: UserEntity) {
    return this.issuesService.create(createIssueDto, currentUser);
  }

  @AuthorizeRoles(Roles.GUILD_PRES)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Get()
  findAll() {
    return this.issuesService.findAll();
  }

  @AuthorizeRoles(Roles.STUDENT)
  @UseGuards(AuthenticationGuard, AuthorizeGuard)
  @Get('student')
  findAllByUser(@CurrentUser() currentUser: UserEntity) {
    return this.issuesService.findAllByUser(currentUser.id);
  }

  @UseGuards(AuthenticationGuard)
  @Get('role')
  findAllByRole(@CurrentUser() currentUser: UserEntity) {
    return this.issuesService.findAllByRole(currentUser.roles);
  }

  @UseGuards(AuthenticationGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issuesService.findOne(id);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('incharge/:id')
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueInchargeDto) {
    return this.issuesService.update(id, updateIssueDto);
  }

  @UseGuards(AuthenticationGuard)
  @Patch('/status/:id')
  updateStatus(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueStatusDto) {
    return this.issuesService.updateStatus(id, updateIssueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issuesService.remove(+id);
  }
}
