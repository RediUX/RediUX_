import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722642725194 implements MigrationInterface {
  name = "Default1722642725194";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "FK_b957bee53dd842e59e479e9afde"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "PK_6a2083913f3647b44f205204e36"`,
    );
    await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "content" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "PK_704201a473cfe0e2f646bea32b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "PK_2346c63b132eacb6cf5a8ccaacd" PRIMARY KEY ("tag_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b957bee53dd842e59e479e9afd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP COLUMN "content_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD "content_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "PK_2346c63b132eacb6cf5a8ccaacd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "PK_704201a473cfe0e2f646bea32b3" PRIMARY KEY ("tag_id", "content_id")`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b957bee53dd842e59e479e9afd" ON "content_tags" ("content_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "FK_b957bee53dd842e59e479e9afde" FOREIGN KEY ("content_id") REFERENCES "content"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "FK_b957bee53dd842e59e479e9afde"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b957bee53dd842e59e479e9afd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "PK_704201a473cfe0e2f646bea32b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "PK_2346c63b132eacb6cf5a8ccaacd" PRIMARY KEY ("tag_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP COLUMN "content_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD "content_id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b957bee53dd842e59e479e9afd" ON "content_tags" ("content_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" DROP CONSTRAINT "PK_2346c63b132eacb6cf5a8ccaacd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "PK_704201a473cfe0e2f646bea32b3" PRIMARY KEY ("content_id", "tag_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "PK_6a2083913f3647b44f205204e36"`,
    );
    await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "content" ADD "id" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "content_tags" ADD CONSTRAINT "FK_b957bee53dd842e59e479e9afde" FOREIGN KEY ("content_id") REFERENCES "content"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
