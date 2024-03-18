import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class UserSignInDto {


    @IsNotEmpty({message: 'registration number(regN) can not be empty'})
    @MinLength(9,{message: 'regNumber max character shoubld be 9'})
    @MaxLength(9,{message: 'regNumber max  character shoubld be 9'})
    regN:string;

    
    @IsNotEmpty({message: 'password can not be null'})
    @MinLength(5,{message: 'password minimum character shoubld be 5'})
    password:string;
}