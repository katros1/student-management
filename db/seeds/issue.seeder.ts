import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { IssueEntity } from "../../src/issues/entities/issue.entity";
import { Roles } from "src/utility/common/user.enum";
import { Status } from "src/utility/common/status.enum";


export default class IssueSeeder implements Seeder {
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await dataSource.query('TRUNCATE "issues" RESTART IDENTITY;');

        const repository = dataSource.getRepository(IssueEntity);

        await repository.insert({
            "id": "404d18bb-6d83-4f46-a310-4c090af3cfda",
            "studentId": "404d18bb-6d83-4f46-a310-4c090af3cfd5",
            "inCharge": [
                Roles.MIN_SECURITY
            ],
            "issue": {
                "message": "banyibye laptop",
                "image": ["wewewewewewewe"]
            },
            "isRead": false,
            "status": Status.PENDING,
        })

        await repository.insert({
            "id": "404d18bb-6d83-4f46-a310-4c090af3cfdb",
            "studentId": "404d18bb-6d83-4f46-a310-4c090af3cfd5",
            "inCharge": [
                Roles.GUILD_PRES
            ],
            "issue": {
                "message": "banyibye laptop",
                "image": ["wewewewewewewe"]
            },
            "isRead": true,
            "status": Status.RECOMMENDED,
        })

        await repository.insert({
            "id": "404d18bb-6d83-4f46-a310-4c090af3cfdc",
            "studentId": "404d18bb-6d83-4f46-a310-4c090af3cfd5",
            "inCharge": [
                Roles.MIN_SECURITY
            ],
            "issue": {
                "message": "banyibye laptop",
                "image": ["wewewewewewewe"]
            },
            "isRead": true,
            "status": Status.INPROGRESS,
        })

        await repository.insert({
            "id": "404d18bb-6d83-4f46-a310-4c090af3cfdd",
            "studentId": "404d18bb-6d83-4f46-a310-4c090af3cfd5",
            "inCharge": [
                Roles.MIN_SECURITY
            ],
            "issue": {
                "message": "banyibye laptop",
                "image": ["wewewewewewewe"]
            },
            "isRead": false,
            "status": Status.ONHOLD,
        })

        await repository.insert({
            "id": "404d18bb-6d83-4f46-a310-4c090af3cfde",
            "studentId": "404d18bb-6d83-4f46-a310-4c090af3cfd5",
            "inCharge": [
                Roles.MIN_SECURITY
            ],
            "issue": {
                "message": "banyibye laptop",
                "image": ["wewewewewewewe"]
            },
            "isRead": false,
            "status": Status.PENDING,
        })
    }
}