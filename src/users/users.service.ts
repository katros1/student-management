import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {hash, compare} from 'bcrypt'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserSignUpDto } from './dto/user-register.dto';
import { UserSignInDto } from './dto/user-login.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signup(userSignUp:UserSignUpDto):Promise<UserEntity>{
    const userExByReg = await this.findUserByRegN(userSignUp.regN);
    const userExByEmail = await this.findUserByRegN(userSignUp.regN);

    console.log(userExByReg, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

    if(userExByEmail) {
      console.log(userExByReg);
      
      throw new BadRequestException('An account with this regNumber exist.');
    } else if(userExByReg) {
      console.log(userExByEmail);
      
      throw new BadRequestException('An account with this email exist.');
    }

    userSignUp.password = await hash(userSignUp.password,10)

    let user=this.usersRepository.create(userSignUp);
    user = await this.usersRepository.save(user);
    delete user.password;
    return user
  }

  async signin(userSignIn: UserSignInDto) {
    const userExists = this.usersRepository.createQueryBuilder('users').addSelect('users.password').where('users.regN=:regN',{regN:userSignIn.regN}).getOne();
    if(!userExists) throw new BadRequestException('Invalid email or password');
    const matchPassword = await compare(userSignIn.password, (await userExists).password);
    if(!matchPassword) throw new BadRequestException('Invalid email or password');

    delete (await userExists).password;
    return userExists
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByRegN(regN:string){
    return await this.usersRepository.findOneBy({regN});
  }

  async findUserByEmail(email:string){
    return await this.usersRepository.findOneBy({email});
  }

  async accessToken(user:UserEntity): Promise<string>{
    return sign({
      id:user.id,
      email:user.email
    }, 
    process.env.ACCESS_TOKEN_SECRET_KEY,{expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME})
  }

}
