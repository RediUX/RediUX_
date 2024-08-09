import { container } from "tsyringe";

import { IContentRepository } from "../../modules/content/repository/interface/IContentRepository";
import { ContentRepository } from "../../modules/content/repository/ContentRepository";

container.registerSingleton<IContentRepository>(
  "ContentRepository",
  ContentRepository,
);
