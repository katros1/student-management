import { IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from 'src/utility/common/status.enum';
import { Roles } from 'src/utility/common/user.enum';

export class UpdateIssueStatusDto {

    @IsNotEmpty({message: 'status field can not be empty'})
    @IsEnum(Status)
    status:Status;

}
