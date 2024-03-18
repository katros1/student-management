import { Accommodation } from 'src/utility/common/accomodation.interface';
import { Residence } from 'src/utility/common/resident.interface';
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
    @Column()
    nationality:string;
    @Column()
    documentN:string;
    @Column()
    guardian_tel:string;
    @Column('json')
    residence: Residence;
    @Column('json')
    accomodation:Accommodation;
    @Column()
    school:string;
    @Column()
    department:string;
    @Column()
    sponsorship:string;
    @Column({select:false})
    password:string;
    @Column({type:'enum', enum:Roles,array:true,default:[Roles.STUDENT]})
    roles:Roles[];
    @CreateDateColumn()
    createdAt:Timestamp;
    @UpdateDateColumn()
    updateAt:Timestamp;
}
 