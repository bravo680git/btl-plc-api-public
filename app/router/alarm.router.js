import { Router } from "express";
import * as AlarmController from "../controller/alarm.controller.js";
import { isAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", AlarmController.get);
router.post("/", isAdmin, AlarmController.create);

export default router;
