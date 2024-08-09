import { Repository } from "typeorm";
import { Content } from "../infra/typeorm/entify/Content";
import {
  IContentRepository,
  IcreateContentDTO,
} from "./interface/IContentRepository";
import { AppDataSource } from "../../../data-source";

class ContentRepository implements IContentRepository {
  private repository: Repository<Content>;
  constructor() {
    this.repository = AppDataSource.getRepository(Content);
  }
  async create({
    title,
    autor,
    description,
    link,
    media_type,
  }: IcreateContentDTO): Promise<Content> {
    const content = this.repository.create({
      title,
      autor,
      description,
      link,
      media_type,
    });

    await this.repository.save(content);
    return content;
  }
}

export { ContentRepository };
