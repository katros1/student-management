import { Accommodation } from 'src/utility/common/accomodation.interface';
import { Gender } from 'src/utility/common/gender.enum';
import { Residence } from 'src/utility/common/resident.interface';
import { sponsorship } from 'src/utility/common/sponsor.enum';
import { Roles } from 'src/utility/common/user.enum';
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    firstname:string;
    @Column()
    lastname:string;
    @Column({unique:true})
    regN:string;
    @Column({unique:true})
    email:string;
    @Column()
    telephoneN:string;
    @Column({type:'enum', enum:Gender})
    gender: Gender
    @Column()
    nationality:string;
    @Column()
    IDno:string;
    @Column()
    guardian_name:string;
    @Column()
    guardian_tel:string;
    @Column('json')
    homeAdress: Residence;
    @Column('json')
    accomodation:Accommodation;
    @Column()
    school:string;
    @Column()
    department:string;
    @Column()
    level:number;
    @Column({type:'enum', enum:sponsorship})
    sponsorship:sponsorship;
    @Column({select:false})
    password:string;
    @Column({type:'enum', enum:Roles,array:true,default:[Roles.STUDENT]})
    roles:Roles[];
    @CreateDateColumn()
    createdAt:Timestamp;
    @UpdateDateColumn()
    updateAt:Timestamp;
}
 