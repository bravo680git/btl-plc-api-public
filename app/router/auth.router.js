import { Router } from "express";
import * as AuthController from "../controller/auth.controller.js";
import { checkAccDataIsValid } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/login", checkAccDataIsValid, AuthController.login);

export default router;
