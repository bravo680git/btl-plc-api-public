import { Router } from "express";
import * as StatusController from "../controller/status.controller.js";
import { isAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", StatusController.get);
router.put("/", isAdmin, StatusController.update);

export default router;
