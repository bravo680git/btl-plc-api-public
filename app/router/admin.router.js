import { Router } from "express";
import * as AdminController from "../controller/admin.controller.js";
import {
  checkAccDataIsValid,
  verifyToken,
  isAdmin,
} from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", [verifyToken, isAdmin], AdminController.get);
router.post("/", [verifyToken, isAdmin], AdminController.create);

export default router;
