import { In, Repository } from "typeorm";
import { Content } from "../infra/typeorm/entity/Content";
import {
  IContentRepository,
  IcreateContentDTO,
} from "./interface/IContentRepository";
import { AppDataSource } from "../../../data-source";
import { Tag } from "../infra/typeorm/entity/Tag";

class ContentRepository implements IContentRepository {
  private repository: Repository<Content>;
  private tagRepository: Repository<Tag>;
  constructor() {
    this.repository = AppDataSource.getRepository(Content);
    this.tagRepository = AppDataSource.getRepository(Tag);
  }

  /*
  this method creates a new content in the database
  */
  async create({
    title,
    autor,
    description,
    link,
    media_type,
    tags,
  }: IcreateContentDTO): Promise<Content> {
    const content = this.repository.create({
      title,
      autor,
      description,
      link,
      media_type,
    });

    if (tags && tags.length > 0) {
      const tagEntities = await this.tagRepository.find({
        where: {
          id: In(tags.map((tag) => tag.id)),
        },
      });
      content.tags = tagEntities;
    }

    await this.repository.save(content);
    return content;
  }

  /*
  this method updates the content based on the id passed as a parameter
  */

  async update(
    id: number,
    data: {
      title?: string;
      autor?: string;
      description?: string;
      link?: string;
      media_type?: string;
    },
  ): Promise<Content> {
    await this.repository.update(id, data);

    return await this.repository.findOneBy({ id });
  }

  /* 
  this method returns a list of contents based on the id or title passed as a parameter
  if no parameter is passed, it returns all contents
  */
  async list(data: {
    id?: number;
    title?: string;
    page?: number;
    limit?: number;
    tag_id?: number;
  }): Promise<Content[]> {
    const { id, title, page = 1, limit = 10, tag_id } = data;

    const queryBuilder = this.repository.createQueryBuilder("content");

    if (tag_id) {
      queryBuilder
        .innerJoin("content.tags", "tag")
        .where("tag.id = :tag_id", { tag_id });
    }
    if (id) {
      queryBuilder.andWhere("content.id = :id", { id });
    } else if (title) {
      queryBuilder.andWhere("content.title LIKE :title", {
        title: `%${title}%`,
      });
    }
    if (page && limit) {
      const offset = (page - 1) * limit;
      queryBuilder.skip(offset).take(limit);
    }

    const contents = await queryBuilder.getMany();
    return contents;
  }

  /*
  this method deletes a content based on the id passed as a parameter
  */
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
export { ContentRepository };
