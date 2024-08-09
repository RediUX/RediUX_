import { Content } from "../../infra/typeorm/entify/Content";

interface IcreateContentDTO {
  title: string;
  autor: string;
  description: string;
  link: string;
  media_type: string;
}

interface IContentRepository {
  create({
    title,
    autor,
    description,
    link,
    media_type,
  }: IcreateContentDTO): Promise<Content>;
}

export { IContentRepository, IcreateContentDTO };
