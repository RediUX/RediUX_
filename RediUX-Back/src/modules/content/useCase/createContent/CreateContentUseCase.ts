import { inject, injectable } from "tsyringe";
import { IContentRepository } from "../../repository/interface/IContentRepository";

interface IRequest {
  title: string;
  autor: string;
  description: string;
  link: string;
  media_type: string;
}

@injectable()
class CreateContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository,
  ) {}

  async execute({ title, autor, description, link, media_type }: IRequest) {
    const content = await this.contentRepository.create({
      title,
      autor,
      description,
      link,
      media_type,
    });

    return content;
  }
}

export { CreateContentUseCase };
