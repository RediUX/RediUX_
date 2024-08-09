import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722639855596 implements MigrationInterface {
  name = "Default1722639855596";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users_admin" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_4f0f50d9922a0ed51c214f5556b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users_admin"`);
  }
}
