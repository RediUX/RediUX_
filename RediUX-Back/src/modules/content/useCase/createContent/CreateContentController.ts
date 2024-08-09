import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateContentUseCase } from "./CreateContentUseCase";

class CreateContentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, autor, description, link, media_type } = request.body;

    const createContentUseCase = container.resolve(CreateContentUseCase);

    const content = await createContentUseCase.execute({
      title,
      autor,
      description,
      link,
      media_type,
    });

    return response.status(201).json(content);
  }
}

export { CreateContentController };
