import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users_admin")
class UserAdmin {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export { UserAdmin };
