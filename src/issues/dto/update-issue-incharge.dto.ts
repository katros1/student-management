import { PartialType } from '@nestjs/mapped-types';
import { CreateIssueDto } from './create-issue.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Roles } from 'src/utility/common/user.enum';

export class UpdateIssueInchargeDto {

    @IsNotEmpty({message: 'incharge field can not be empty'})
    @IsEnum(Roles, { each: true})
    inCharge:Roles[];

}
