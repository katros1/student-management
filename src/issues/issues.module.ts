import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueEntity } from './entities/issue.entity';

@Module({
  imports:[TypeOrmModule.forFeature([IssueEntity])],
  controllers: [IssuesController],
  providers: [IssuesService],
  exports:[IssuesService]
})
export class IssuesModule {}
