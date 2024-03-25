import { IsArray, IsEnum, IsJSON, IsNotEmpty, IsString } from "class-validator";
import { Roles } from "src/utility/common/user.enum";

class Issue {
    @IsNotEmpty({message: 'issue field must not be empty'})
    @IsString({message: "message field must be string"})
    message: string;

    @IsNotEmpty({message: 'image field must not be empty'})
    @IsArray()
    image: string[];
}

export class CreateIssueDto {
    

    @IsNotEmpty({message: 'issue field must not be empty'})
    issue:Issue;

    @IsEnum(Roles)
    inCharge: Roles[];
}
