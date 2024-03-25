import { Issue } from "src/utility/common/issues.interface";
import { Status } from "src/utility/common/status.enum";
import { Roles } from "src/utility/common/user.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('issues')
export class IssueEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    studentId:string;
    @Column({type:'enum', enum:Roles,array:true,default:[Roles.GUILD_PRES]})
    inCharge:Roles[];
    @Column('json')
    issue:Issue;
    @Column({default: false})
    isRead:boolean;
    @Column({type:'enum', enum:Status, default:Status.SENT})
    status:Status;
    createdAt:Timestamp;
    @UpdateDateColumn()
    updateAt:Timestamp;
}
