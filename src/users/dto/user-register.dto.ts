import { IsEnum, IsInt, IsNotEmpty, IsString, MinLength, ValidateNested } from "class-validator";
import { UserSignInDto } from "./user-login.dto";
import { Type } from "class-transformer";
import { sponsorship } from "src/utility/common/sponsor.enum";
import { Gender } from "src/utility/common/gender.enum";


class Residence {

    @IsNotEmpty({message: 'district can not be null'})
    @IsString({message: 'district should be string'})
    district: string;

    @IsNotEmpty({message: 'sector can not be null'})    
    @IsString({message: 'sector should be string'})
    sector: string;

    @IsNotEmpty({message: 'cell can not be null'})
    @IsString({message: 'cell should be string'})
    cell: string;

    @IsNotEmpty({message: 'village can not be null'})
    @IsString({message: 'village should be string'})
    village: string;
}

class CampusHostel {
    @IsNotEmpty({message: 'hostel can not be null'})
    @IsString({message: 'hostel name should be string'})
    hostel: string;

    @IsNotEmpty({message: 'room number can not be null'})
    @IsString({message: 'room number should be string'})
    roomNumber: string | number;
}

class Accommodation {
    @ValidateNested()
    @Type(() => CampusHostel)
    campusHostel: CampusHostel;

    @ValidateNested()
    @Type(() => Residence)
    offCampus: Residence

    @ValidateNested()
    @Type(() => Residence)
    family: Residence
}
export class UserSignUpDto extends UserSignInDto {
    
    @IsNotEmpty({message: 'firstname can not be null'})
    @IsString({message: 'firstname should be string'})
    firstname:string;

    @IsNotEmpty({message: 'lastname can not be null'})
    @IsString({message: 'lastname should be string'})
    lastname:string;

    @IsNotEmpty({message: 'email can not be null'})
    @IsString({message: 'email should be string'})
    email:string;

    @IsNotEmpty({message: 'telephoneN can not be null'})
    @IsString({message: 'telephoneN should be string'})
    telephoneN:string;

    @IsNotEmpty({message: 'nationality can not be null'})
    @IsString({message: 'nationality should be string'})
    nationality:string;

    
    @IsNotEmpty({message: 'gender can not be null'})
    @IsEnum(Gender)
    gender:Gender;
     
    @IsNotEmpty({message: 'ID number can not be null'})
    @IsString({message: 'ID number should be string'})
    IDno:string;
    
    @IsNotEmpty({message: 'guardian_name can not be null'})
    @IsString({message: 'guardian_name should be string'})
    guardian_name:string;

    @IsNotEmpty({message: 'guardian_tel can not be null'})
    @IsString({message: 'guardian_tel should be string'})
    guardian_tel:string;

    @IsNotEmpty({message: 'home adress can not be null'})
    @ValidateNested()
    @Type(() => Residence)
    homeAdress: Residence;

    @IsNotEmpty({message: 'accomodation can not be null'})
    @ValidateNested()
    @Type(() => Accommodation)
    accomodation:Accommodation;

    @IsNotEmpty({message: 'school can not be null'})
    @IsString({message: 'school should be string'})
    school:string;

    @IsNotEmpty({message: 'department can not be null'})
    @IsString({message: 'department should be string'})
    department:string;
    
    @IsNotEmpty({message: 'level can not be null'})
    @IsInt({message: 'level should be string'})
    level:number;

    @IsNotEmpty({message: 'sponsorship can not be null'})
    @IsEnum(sponsorship)
    sponsorship:sponsorship;


}