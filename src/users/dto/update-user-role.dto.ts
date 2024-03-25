import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Roles } from 'src/utility/common/user.enum';

export class UpdateUserRoleDto {
    @IsNotEmpty({message: 'role field can not be empty'})
    @IsEnum(Roles, { each: true})
    roles:Roles[];
}
