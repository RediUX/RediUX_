import { Router } from "express";
import { CreateContentController } from "../../../../../modules/content/useCase/createContent/CreateContentController";

const contentRoutes = Router();

const createContentController = new CreateContentController();

contentRoutes.post("/", createContentController.handle);

export { contentRoutes };
