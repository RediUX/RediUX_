import { Router } from "express";

import { contentRoutes } from "./implementation/content.routes";

const routes = Router();
routes.use("/content", contentRoutes);

export { routes };
