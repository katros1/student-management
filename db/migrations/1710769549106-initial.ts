import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1710769549106 implements MigrationInterface {
    name = 'Initial1710769549106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_roles_enum" AS ENUM('guild-president', 'vice-guild', 'social-affairs', 'minister-information', 'minister-gender', 'minister-culture', 'minister-security', 'minister-disabilities', 'student')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "regN" character varying NOT NULL, "email" character varying NOT NULL, "telephoneN" character varying NOT NULL, "nationality" character varying NOT NULL, "documentN" character varying NOT NULL, "guardian_tel" character varying NOT NULL, "residence" json NOT NULL, "accomodation" json NOT NULL, "school" character varying NOT NULL, "department" character varying NOT NULL, "sponsorship" character varying NOT NULL, "password" character varying NOT NULL, "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{student}', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ed5fc59fca53615f0a18fde92c8" UNIQUE ("regN"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_roles_enum"`);
    }

}
