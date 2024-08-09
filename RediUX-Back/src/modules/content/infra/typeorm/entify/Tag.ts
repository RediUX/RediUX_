import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Content } from "./Content";

@Entity("tag")
class Tag {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Content, (content) => content.id)
  content: Content[];
}
export { Tag };
