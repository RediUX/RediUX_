import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722635329708 implements MigrationInterface {
  name = "Default1722635329708";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tag" ("id" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "content" ("id" character varying NOT NULL, "title" character varying NOT NULL, "autor" character varying NOT NULL, "description" character varying NOT NULL, "link" character varying NOT NULL, "media_type" character varying NOT NULL, CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "content_tags" ("content_id" character varying NOT NULL, "tag_id" character varying NOT NULL, CONSTRAINT "PK_704201a473cfe0e2f646bea32b3" PRIMARY KEY ("content_id", "tag_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b957bee53dd842e59e479e9afd" ON "content_tags" ("content_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2346c63b132eacb6cf5a8ccaac" ON "content_tags" ("tag_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "FK_b957bee53dd842e59e479e9afde" FOREIGN KEY ("content_id") REFERENCES "content"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "FK_2346c63b132eacb6cf5a8ccaacd" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "FK_2346c63b132eacb6cf5a8ccaacd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "FK_b957bee53dd842e59e479e9afde"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_2346c63b132eacb6cf5a8ccaac"`);
    await queryRunner.query(`DROP INDEX "IDX_b957bee53dd842e59e479e9afd"`);
    await queryRunner.query(`DROP TABLE "content_tags"`);
    await queryRunner.query(`DROP TABLE "content"`);
    await queryRunner.query(`DROP TABLE "tag"`);
  }
}
