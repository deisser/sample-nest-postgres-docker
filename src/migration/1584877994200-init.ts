import {MigrationInterface, QueryRunner} from "typeorm";

export class init1584877994200 implements MigrationInterface {
    name = 'init1584877994200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstname"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastname"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "eMail"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstname" character varying(300) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastname" character varying(300) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "eMail" character varying(300) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET DEFAULT 'system'`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" SET DEFAULT 'system'`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "eMail"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastname"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstname"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "eMail" character varying(300) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastname" character varying(300) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstname" character varying(300) NOT NULL`, undefined);
    }

}
