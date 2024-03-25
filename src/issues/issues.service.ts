import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueInchargeDto } from './dto/update-issue-incharge.dto';
import { IssueEntity } from './entities/issue.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ArrayContains, In, Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Roles } from 'src/utility/common/user.enum';
import { UpdateIssueStatusDto } from './dto/update-issue-status.dto';

@Injectable()
export class IssuesService {

  constructor(@InjectRepository(IssueEntity) private readonly issueRepository: Repository<IssueEntity>){}

  async create(createIssueDto: CreateIssueDto, currentUser: UserEntity) {

    const issue = this.issueRepository.create(createIssueDto);

    issue.studentId = currentUser.id;
    
    return await this.issueRepository.save(issue);
  }

  async findAll() {
    return await this.issueRepository.find();
  }

  async findAllByUser(id: string) {
    return await this.issueRepository.find({
      where: {
        studentId: id
      }
    });
  }

  async findAllByRole(role: Roles[]) {
    return await this.issueRepository.find({
      where:{
        inCharge: ArrayContains(role)
      }
    })
  }

  async findOne(id: string) {
    const product =  await this.issueRepository.findOne({
      where: {
        id:id
      },
    })

    return  product;
  }

  async update(id: string, updateIssueDto: UpdateIssueInchargeDto) {
    const issue = await this.findOne(id);
    Object.assign(issue, updateIssueDto);
  
    return this.issueRepository.save(issue);
  }

  async updateStatus(id: string, updateIssueDto: UpdateIssueStatusDto) {
    const issue = await this.findOne(id);
    Object.assign(issue, updateIssueDto);
  
    return this.issueRepository.save(issue);
  }

  remove(id: number) {
    return `This action removes a #${id} issue`;
  }
}
