import { Router } from "express";
import { isAdmin } from "../middleware/auth.middleware.js";
import * as ProductController from "../controller/product.controller.js";

const router = Router();

router.get("/", ProductController.get);
router.get("/all", ProductController.getAll);
router.post("/", isAdmin, ProductController.create);

export default router;
