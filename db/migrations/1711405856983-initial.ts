import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1711405856983 implements MigrationInterface {
    name = 'Initial1711405856983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`CREATE TYPE "public"."users_sponsorship_enum" AS ENUM('HEC_loan', 'private')`);
        await queryRunner.query(`CREATE TYPE "public"."users_roles_enum" AS ENUM('guild-president', 'vice-guild', 'social-affairs', 'minister-information', 'minister-gender', 'minister-culture', 'minister-security', 'minister-disabilities', 'student', 'super-admin', 'admin')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "regN" character varying NOT NULL, "email" character varying NOT NULL, "telephoneN" character varying NOT NULL, "gender" "public"."users_gender_enum" NOT NULL, "nationality" character varying NOT NULL, "IDno" character varying NOT NULL, "guardian_name" character varying NOT NULL, "guardian_tel" character varying NOT NULL, "homeAdress" json NOT NULL, "accomodation" json NOT NULL, "school" character varying NOT NULL, "department" character varying NOT NULL, "level" integer NOT NULL, "sponsorship" "public"."users_sponsorship_enum" NOT NULL, "password" character varying NOT NULL, "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{student}', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ed5fc59fca53615f0a18fde92c8" UNIQUE ("regN"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."issues_incharge_enum" AS ENUM('guild-president', 'vice-guild', 'social-affairs', 'minister-information', 'minister-gender', 'minister-culture', 'minister-security', 'minister-disabilities', 'student', 'super-admin', 'admin')`);
        await queryRunner.query(`CREATE TYPE "public"."issues_status_enum" AS ENUM('recieved', 'sent', 'recommended', 'pending', 'open', 'reopen', 'in_progress', 'on_hold', 'resolved', 'closed', 'duplicated')`);
        await queryRunner.query(`CREATE TABLE "issues" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "studentId" character varying NOT NULL, "inCharge" "public"."issues_incharge_enum" array NOT NULL DEFAULT '{guild-president}', "issue" json NOT NULL, "isRead" boolean NOT NULL DEFAULT false, "status" "public"."issues_status_enum" NOT NULL DEFAULT 'sent', "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9d8ecbbeff46229c700f0449257" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "issues"`);
        await queryRunner.query(`DROP TYPE "public"."issues_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."issues_incharge_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_roles_enum"`);
        await queryRunner.query(`DROP TYPE "public"."users_sponsorship_enum"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
    }

}
