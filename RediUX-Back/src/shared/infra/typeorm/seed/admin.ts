import { AppDataSource } from "../../../../data-source";
import { UserAdmin } from "../../../../modules/users/infra/typeorm/entify/UserAdmin";
import bcrypt from "bcrypt";

async function createInitialData() {
  await AppDataSource.initialize();

  const userAdminRepository = AppDataSource.getRepository(UserAdmin);

  const hashedPassword = await bcrypt.hash(process.env.ADM_PASS, 10);

  const adminUser = userAdminRepository.create({
    email: "admin@email.com",
    password: hashedPassword,
  });

  await userAdminRepository.save(adminUser);

  console.log("Usuário administrador criado com sucesso!");

  await AppDataSource.destroy();
}

createInitialData().catch((error) => {
  console.error("Erro ao criar dados iniciais:", error);
  process.exit(1);
});
