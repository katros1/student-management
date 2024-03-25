import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { UserEntity } from "../../src/users/entities/user.entity";
import { Roles } from "src/utility/common/user.enum";
import { sponsorship } from "src/utility/common/sponsor.enum";
import { Gender } from "src/utility/common/gender.enum";


export default class UserSeeder implements Seeder {
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await dataSource.query('TRUNCATE "users" RESTART IDENTITY;');

        const repository = dataSource.getRepository(UserEntity);

        await repository.insert( {
            id: "61cd74f9-bf68-40d5-ac21-dc375570b651",
            firstname: "Peter",
            lastname: "Tom",
            regN: "221009836",
            email: "guild@gmail.com",
            gender: Gender.FMALE,
            telephoneN: "string",
            nationality: "string",
            IDno: "string",
            guardian_name: "tom aka",
            guardian_tel: "string",
            homeAdress: {

            },
            accomodation: {

            },
            level: 4,
            school: "string",
            department: "string",
            sponsorship: sponsorship.HEC,
            password: "$2b$10$/5qeg.N6f4ZuB.2njGjSD.lXBfE3y64F7e7A8nY6dMzJMt94YmYrC",
            roles: [Roles.GUILD_PRES]
        })

        await repository.insert( {
            id: "61cd74f9-bf68-40d5-ac21-dc375570b652",
            firstname: "Tom",
            lastname: "done",
            regN: "221000836",
            email: "ministerS@gmail.com",
            telephoneN: "string",
            gender: Gender.MALE,
            nationality: "string",
            IDno: "string",
            guardian_name: "tom aka",
            guardian_tel: "string",
            homeAdress: {

            },
            accomodation: {

            },
            level:3,
            school: "string",
            department: "string",
            sponsorship: sponsorship.HEC,
            password: "$2b$10$/5qeg.N6f4ZuB.2njGjSD.lXBfE3y64F7e7A8nY6dMzJMt94YmYrC",
            roles: [Roles.MIN_SECURITY]
        })

        await repository.insert( {
            id: "61cd74f9-bf68-40d5-ac21-dc375570b653",
            firstname: "Peter",
            lastname: "done",
            regN: "000000000",
            email: "superAdmin@gmail.com",
            gender:Gender.FMALE,
            telephoneN: "string",
            nationality: "string",
            IDno: "string",
            guardian_name: "Tom done",
            guardian_tel: "string",
            homeAdress: {

            },
            accomodation: {

            },
            level: 2,
            school: "string",
            department: "string",
            sponsorship: sponsorship.HEC,
            password: "$2b$10$/5qeg.N6f4ZuB.2njGjSD.lXBfE3y64F7e7A8nY6dMzJMt94YmYrC",
            roles: [Roles.SUPER_ADMIN]
        })

        await repository.insert( {
            id: "61cd74f9-bf68-40d5-ac21-dc375570b654",
            firstname: "John",
            lastname: "done",
            regN: "000000001",
            email: "admin@gmail.com",
            gender: Gender.MALE,
            telephoneN: "string",
            nationality: "string",
            IDno: sponsorship.PRIV,
            guardian_name: "tom aka",
            guardian_tel: "string",
            homeAdress: {

            },
            accomodation: {

            },
            level: 2,
            school: "string",
            department: "string",
            sponsorship: sponsorship.HEC,
            password: "$2b$10$/5qeg.N6f4ZuB.2njGjSD.lXBfE3y64F7e7A8nY6dMzJMt94YmYrC",
            roles: [Roles.ADMIN]
        })

        await repository.insert( {
            id: "61cd74f9-bf68-40d5-ac21-dc375570b655",
            firstname: "Richard",
            lastname: "done",
            regN: "221009936",
            email: "student@gmail.com",
            gender: Gender.MALE,
            telephoneN: "string",
            nationality: "string",
            IDno: "string",
            guardian_name: "tom don",
            guardian_tel: "string",
            homeAdress: {

            },
            accomodation: {

            },
            level:2,
            school: "string",
            department: "string",
            sponsorship: sponsorship.HEC,
            password: "$2b$10$/5qeg.N6f4ZuB.2njGjSD.lXBfE3y64F7e7A8nY6dMzJMt94YmYrC",
            roles: [Roles.STUDENT]
        })
    }
}