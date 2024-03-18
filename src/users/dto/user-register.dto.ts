import { IsNotEmpty, MinLength } from "class-validator";
import { UserSignInDto } from "./user-login.dto";
import { Residence } from "src/utility/common/resident.interface";
import { Accommodation } from "src/utility/common/accomodation.interface";

export class UserSignUpDto extends UserSignInDto {
    
    @IsNotEmpty({message: 'firstname can not be null'})
    @IsNotEmpty({message: 'firstname should be string'})
    firstname:string;

    @IsNotEmpty({message: 'lastname can not be null'})
    @IsNotEmpty({message: 'lastname should be string'})
    lastname:string;

    @IsNotEmpty({message: 'email can not be null'})
    @IsNotEmpty({message: 'email should be string'})
    email:string;

    @IsNotEmpty({message: 'telephoneN can not be null'})
    @IsNotEmpty({message: 'telephoneN should be string'})
    telephoneN:string;

    @IsNotEmpty({message: 'nationality can not be null'})
    @IsNotEmpty({message: 'nationality should be string'})
    nationality:string;

    @IsNotEmpty({message: 'documentN can not be null'})
    @IsNotEmpty({message: 'documentN should be string'})
    documentN:string;

    @IsNotEmpty({message: 'guardian_tel can not be null'})
    @IsNotEmpty({message: 'guardian_tel should be string'})
    guardian_tel:string;

    @IsNotEmpty({message: 'residence can not be null'})
    residence: Residence;

    @IsNotEmpty({message: 'accomodation can not be null'})
    accomodation:Accommodation;

    @IsNotEmpty({message: 'school can not be null'})
    @IsNotEmpty({message: 'school should be string'})
    school:string;

    @IsNotEmpty({message: 'department can not be null'})
    @IsNotEmpty({message: 'department should be string'})
    department:string;

    @IsNotEmpty({message: 'sponsorship can not be null'})
    @IsNotEmpty({message: 'sponsorship should be string'})
    sponsorship:string;


}